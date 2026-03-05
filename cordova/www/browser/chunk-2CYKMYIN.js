import {
  registerPlugin
} from "./chunk-QYTOD3XC.js";
import "./chunk-PAXKX5KU.js";

// node_modules/@capacitor/local-notifications/dist/esm/definitions.js
var Weekday;
(function(Weekday2) {
  Weekday2[Weekday2["Sunday"] = 1] = "Sunday";
  Weekday2[Weekday2["Monday"] = 2] = "Monday";
  Weekday2[Weekday2["Tuesday"] = 3] = "Tuesday";
  Weekday2[Weekday2["Wednesday"] = 4] = "Wednesday";
  Weekday2[Weekday2["Thursday"] = 5] = "Thursday";
  Weekday2[Weekday2["Friday"] = 6] = "Friday";
  Weekday2[Weekday2["Saturday"] = 7] = "Saturday";
})(Weekday || (Weekday = {}));

// node_modules/@capacitor/local-notifications/dist/esm/index.js
var LocalNotifications = registerPlugin("LocalNotifications", {
  web: () => import("./chunk-PFY7A4KI.js").then((m) => new m.LocalNotificationsWeb())
});
export {
  LocalNotifications,
  Weekday
};
//# sourceMappingURL=chunk-2CYKMYIN.js.map
