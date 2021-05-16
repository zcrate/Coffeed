// import { getShop } from "./services/shopService";
import { getShop } from "../src/fakeBackend/fakeShopsService";

export function getOpenStatus(id) {
  const shop = getShop(id);
  const { open, close } = shop.hours;
  const { startDate, endDate } = isOpen(open, close);

  const now = new Date().toTimeString();

  if (now < startDate || now > endDate) return;

  return true;
}

export function timeDisplay(time) {
  if (parseInt(time) > 12) {
    return parseInt(time) - 12 + " pm";
  }
  return parseInt(time) + " am";
}

function isOpen(open, close) {
  const [openHour, openMin] = open.split(":");
  const [closeHour, closeMin] = close.split(":");

  const startDate = new Date(
    null,
    null,
    null,
    parseInt(openHour),
    parseInt(openMin)
  ).toTimeString();

  const endDate = new Date(
    null,
    null,
    null,
    parseInt(closeHour),
    parseInt(closeMin)
  ).toTimeString();
  return { startDate, endDate };
}
