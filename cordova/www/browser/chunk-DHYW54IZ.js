import {
  AuthService,
  Firestore,
  doc,
  getDoc,
  setDoc,
  updateDoc
} from "./chunk-YU6DDDO5.js";
import {
  Injectable,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-L6VISU4K.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-PAXKX5KU.js";

// src/app/bookmarks.service.ts
var LOCAL_KEY = "bookmarks_v1";
var BookmarksService = class _BookmarksService {
  firestore = inject(Firestore);
  authService = inject(AuthService);
  bookmarks = signal([], ...ngDevMode ? [{ debugName: "bookmarks" }] : []);
  constructor() {
    effect(() => {
      const user = this.authService.user();
      if (user) {
        this.loadFromFirestore(user.uid);
      } else {
        this.loadFromLocal();
      }
    });
  }
  isBookmarked(id) {
    return this.bookmarks().some((b) => b.id === id);
  }
  async toggle(bookmark) {
    const existing = this.bookmarks().findIndex((b) => b.id === bookmark.id);
    let updated;
    if (existing >= 0) {
      updated = this.bookmarks().filter((b) => b.id !== bookmark.id);
    } else {
      updated = [__spreadProps(__spreadValues({}, bookmark), { savedAt: Date.now() }), ...this.bookmarks()];
    }
    this.bookmarks.set(updated);
    this.saveLocal(updated);
    await this.syncFirestore(updated);
    return existing < 0;
  }
  getByType(type) {
    return this.bookmarks().filter((b) => b.type === type);
  }
  loadFromLocal() {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      this.bookmarks.set(raw ? JSON.parse(raw) : []);
    } catch {
      this.bookmarks.set([]);
    }
  }
  saveLocal(bookmarks) {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(bookmarks));
  }
  async loadFromFirestore(uid) {
    const ref = doc(this.firestore, `users/${uid}`);
    const snap = await getDoc(ref);
    if (snap.exists()) {
      const data = snap.data();
      const bm = data["bookmarks"] ?? [];
      this.bookmarks.set(bm);
      this.saveLocal(bm);
    } else {
      this.loadFromLocal();
    }
  }
  async syncFirestore(bookmarks) {
    const user = this.authService.user();
    if (!user)
      return;
    const ref = doc(this.firestore, `users/${user.uid}`);
    await updateDoc(ref, { bookmarks }).catch(() => setDoc(ref, { bookmarks }, { merge: true }));
  }
  static \u0275fac = function BookmarksService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookmarksService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookmarksService, factory: _BookmarksService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookmarksService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  BookmarksService
};
//# sourceMappingURL=chunk-DHYW54IZ.js.map
