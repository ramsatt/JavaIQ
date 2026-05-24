package in.sangathi.javaiq;

import android.view.View;
import android.view.ViewGroup;
import android.widget.Button;
import android.widget.FrameLayout;
import android.widget.ImageView;
import android.widget.TextView;

import com.getcapacitor.JSObject;
import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.google.android.gms.ads.AdError;
import com.google.android.gms.ads.AdListener;
import com.google.android.gms.ads.AdLoader;
import com.google.android.gms.ads.AdRequest;
import com.google.android.gms.ads.FullScreenContentCallback;
import com.google.android.gms.ads.LoadAdError;
import com.google.android.gms.ads.appopen.AppOpenAd;
import com.google.android.gms.ads.nativead.NativeAd;
import com.google.android.gms.ads.nativead.NativeAdOptions;
import com.google.android.gms.ads.nativead.NativeAdView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CapacitorPlugin(name = "NativeAd")
public class NativeAdPlugin extends Plugin {

    private final Map<String, NativeAd> loadedAds = new HashMap<>();
    private final Map<String, NativeAdView> adViews = new HashMap<>();

    // App Open ad state
    private AppOpenAd appOpenAd = null;

    // ── Load ────────────────────────────────────────────────────────────────

    @PluginMethod
    public void loadAd(PluginCall call) {
        String adUnitId = call.getString("adUnitId");
        String slotId = call.getString("slotId");
        if (adUnitId == null) { call.reject("adUnitId required"); return; }
        if (slotId == null)   { call.reject("slotId required"); return; }

        String finalSlotId = slotId;
        getActivity().runOnUiThread(() -> {
            AdLoader loader = new AdLoader.Builder(getContext(), adUnitId)
                .forNativeAd(ad -> {
                    NativeAd prev = loadedAds.put(finalSlotId, ad);
                    if (prev != null) prev.destroy();
                    JSObject evt = new JSObject();
                    evt.put("slotId", finalSlotId);
                    notifyListeners("adLoaded", evt);
                })
                .withAdListener(new AdListener() {
                    @Override
                    public void onAdFailedToLoad(LoadAdError err) {
                        JSObject evt = new JSObject();
                        evt.put("slotId", finalSlotId);
                        evt.put("error", err.getMessage());
                        notifyListeners("adFailedToLoad", evt);
                    }
                })
                .withNativeAdOptions(new NativeAdOptions.Builder().build())
                .build();
            loader.loadAd(new AdRequest.Builder().build());
        });
        call.resolve();
    }

    // ── Show ────────────────────────────────────────────────────────────────

    @PluginMethod
    public void showAd(PluginCall call) {
        String slotId = call.getString("slotId");
        if (slotId == null) { call.reject("slotId required"); return; }

        float cssX = call.getFloat("x", 0f);
        float cssY = call.getFloat("y", 0f);
        float cssW = call.getFloat("width", 0f);
        float cssH = call.getFloat("height", 0f);

        NativeAd ad = loadedAds.get(slotId);
        if (ad == null) { call.reject("No loaded ad for slotId: " + slotId); return; }

        String finalSlotId = slotId;
        getActivity().runOnUiThread(() -> {
            removeViewForSlot(finalSlotId);

            float density = getContext().getResources().getDisplayMetrics().density;
            NativeAdView adView = (NativeAdView) getActivity().getLayoutInflater()
                .inflate(R.layout.native_ad_view, null, false);

            populateNativeAdView(ad, adView);
            adViews.put(finalSlotId, adView);

            FrameLayout.LayoutParams params = new FrameLayout.LayoutParams(
                (int)(cssW * density),
                (int)(cssH * density)
            );
            params.leftMargin = (int)(cssX * density);
            params.topMargin  = (int)(cssY * density);

            ((ViewGroup) getActivity().getWindow().getDecorView()).addView(adView, params);
            call.resolve();
        });
    }

    // ── Update position ──────────────────────────────────────────────────────

    @PluginMethod
    public void updatePosition(PluginCall call) {
        String slotId = call.getString("slotId");
        if (slotId == null) { call.reject("slotId required"); return; }

        float cssX = call.getFloat("x", 0f);
        float cssY = call.getFloat("y", 0f);

        NativeAdView adView = adViews.get(slotId);
        if (adView == null) { call.resolve(); return; }

        getActivity().runOnUiThread(() -> {
            float density = getContext().getResources().getDisplayMetrics().density;
            FrameLayout.LayoutParams params = (FrameLayout.LayoutParams) adView.getLayoutParams();
            params.topMargin  = (int)(cssY * density);
            params.leftMargin = (int)(cssX * density);
            adView.setLayoutParams(params);
            call.resolve();
        });
    }

    // ── Visibility ───────────────────────────────────────────────────────────

    @PluginMethod
    public void setVisible(PluginCall call) {
        String slotId = call.getString("slotId");
        if (slotId == null) { call.reject("slotId required"); return; }

        boolean visible = Boolean.TRUE.equals(call.getBoolean("visible", true));
        NativeAdView adView = adViews.get(slotId);
        if (adView == null) { call.resolve(); return; }

        getActivity().runOnUiThread(() -> {
            adView.setVisibility(visible ? View.VISIBLE : View.GONE);
            call.resolve();
        });
    }

    // ── Destroy single slot ──────────────────────────────────────────────────

    @PluginMethod
    public void destroyAd(PluginCall call) {
        String slotId = call.getString("slotId");
        if (slotId == null) { call.reject("slotId required"); return; }

        getActivity().runOnUiThread(() -> {
            removeViewForSlot(slotId);
            NativeAd ad = loadedAds.remove(slotId);
            if (ad != null) ad.destroy();
            call.resolve();
        });
    }

    // ── Destroy all slots ────────────────────────────────────────────────────

    @PluginMethod
    public void destroyAll(PluginCall call) {
        getActivity().runOnUiThread(() -> {
            List<String> keys = new ArrayList<>(adViews.keySet());
            for (String key : keys) removeViewForSlot(key);
            for (NativeAd ad : loadedAds.values()) ad.destroy();
            loadedAds.clear();
            call.resolve();
        });
    }

    // ── App Open ─────────────────────────────────────────────────────────────

    @PluginMethod
    public void loadAppOpen(PluginCall call) {
        String adUnitId = call.getString("adUnitId");
        if (adUnitId == null) { call.reject("adUnitId required"); return; }

        getActivity().runOnUiThread(() ->
            AppOpenAd.load(
                getContext(),
                adUnitId,
                new AdRequest.Builder().build(),
                new AppOpenAd.AppOpenAdLoadCallback() {
                    @Override
                    public void onAdLoaded(AppOpenAd ad) {
                        appOpenAd = ad;
                        notifyListeners("appOpenLoaded", new JSObject());
                    }
                    @Override
                    public void onAdFailedToLoad(LoadAdError err) {
                        JSObject evt = new JSObject();
                        evt.put("error", err.getMessage());
                        notifyListeners("appOpenFailed", evt);
                    }
                }
            )
        );
        call.resolve();
    }

    @PluginMethod
    public void showAppOpen(PluginCall call) {
        if (appOpenAd == null) { call.resolve(); return; } // no ad ready — silent skip

        getActivity().runOnUiThread(() -> {
            appOpenAd.setFullScreenContentCallback(new FullScreenContentCallback() {
                @Override
                public void onAdDismissedFullScreenContent() {
                    appOpenAd = null;
                    notifyListeners("appOpenDismissed", new JSObject());
                }
                @Override
                public void onAdFailedToShowFullScreenContent(AdError adError) {
                    appOpenAd = null;
                    notifyListeners("appOpenDismissed", new JSObject());
                }
            });
            appOpenAd.show(getActivity());
            call.resolve();
        });
    }

    // ── Helpers ──────────────────────────────────────────────────────────────

    private void removeViewForSlot(String slotId) {
        NativeAdView view = adViews.remove(slotId);
        if (view != null && view.getParent() instanceof ViewGroup) {
            ((ViewGroup) view.getParent()).removeView(view);
        }
    }

    private void populateNativeAdView(NativeAd ad, NativeAdView adView) {
        TextView headline = adView.findViewById(R.id.ad_headline);
        TextView body     = adView.findViewById(R.id.ad_body);
        ImageView icon    = adView.findViewById(R.id.ad_app_icon);
        Button cta        = adView.findViewById(R.id.ad_call_to_action);

        adView.setHeadlineView(headline);
        adView.setBodyView(body);
        adView.setIconView(icon);
        adView.setCallToActionView(cta);

        headline.setText(ad.getHeadline());

        if (ad.getBody() != null) {
            body.setText(ad.getBody());
            body.setVisibility(View.VISIBLE);
        } else {
            body.setVisibility(View.GONE);
        }

        if (ad.getIcon() != null && ad.getIcon().getDrawable() != null) {
            icon.setImageDrawable(ad.getIcon().getDrawable());
            icon.setVisibility(View.VISIBLE);
        } else {
            icon.setVisibility(View.GONE);
        }

        if (ad.getCallToAction() != null) {
            cta.setText(ad.getCallToAction());
            cta.setVisibility(View.VISIBLE);
        } else {
            cta.setVisibility(View.GONE);
        }

        adView.setNativeAd(ad);
    }

    @Override
    protected void handleOnDestroy() {
        List<String> keys = new ArrayList<>(adViews.keySet());
        for (String key : keys) removeViewForSlot(key);
        for (NativeAd ad : loadedAds.values()) ad.destroy();
        loadedAds.clear();
        adViews.clear();
        super.handleOnDestroy();
    }
}
