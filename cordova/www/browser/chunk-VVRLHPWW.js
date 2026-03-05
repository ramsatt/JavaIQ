import{a as o}from"./chunk-QSPX3XV4.js";import{S as n}from"./chunk-QHT4LFPW.js";var h=new Function("specifier","return import(specifier)"),s=class t{async shareText(a,e,r){if(o.isNativePlatform())try{let{Share:c}=await h("@capacitor/share");await c.share({title:a,text:e,url:r,dialogTitle:a});return}catch{}if(typeof navigator<"u"&&navigator.share)try{await navigator.share({title:a,text:e,url:r});return}catch{}let i=r?`${e}
${r}`:e;try{await navigator.clipboard.writeText(i)}catch{}}shareAchievement(a,e){return this.shareText(`\u{1F3C6} Achievement Unlocked: ${a}`,`I just unlocked "${a}" on JavaIQ!
${e}

#JavaIQ #Java #Coding`)}shareDailyResult(a,e,r){let i=a===e?"\u{1F3C6}":a>=Math.ceil(e/2)?"\u{1F389}":"\u{1F4AA}";return this.shareText("JavaIQ Daily Challenge",`${i} I scored ${a}/${e} on today's Java Daily Challenge and earned +${r} XP!
Can you beat that? #JavaIQ #Java`)}shareCertificate(a){return this.shareText(`JavaIQ Certificate \u2014 ${a}`,`I just completed "${a}" on JavaIQ and earned my certificate! \u{1F393}
#JavaIQ #Java #Learning`)}static \u0275fac=function(e){return new(e||t)};static \u0275prov=n({token:t,factory:t.\u0275fac,providedIn:"root"})};export{s as a};
