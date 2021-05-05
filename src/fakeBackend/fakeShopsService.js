import { allShops } from "./fakeShops";

export function getAllShops() {
  return allShops;
}

export function getOpenStatus(id) {
  const shop = allShops.find((s) => s._id === id);
  const { open, close } = shop.hours;

  const openToday = new Date(null, null, null, parseInt(open)).toTimeString();
  const closeToday = new Date(null, null, null, parseInt(close)).toTimeString();
  const now = new Date().toTimeString();

  if (now < openToday || now > closeToday) return;

  return true;
}

export function timeDisplay(time) {
  if (parseInt(time) > 12) {
    return parseInt(time) - 12 + " pm";
  }
  return parseInt(time) + " am";
}
