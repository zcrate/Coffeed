import fakeShops from "./fakeShops";

export function getOpenStatus(id) {
  const shop = fakeShops.get(id);

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

export function getAllShops() {
  return fakeShops.getAll();
}

export function saveShop(shop) {
  console.log(shop);

  let shopInDb = fakeShops.get(shop._id) || {};

  shopInDb.name = shop.name;
  shopInDb.hours = shop.hours;
  shopInDb.description = shop.description;
  shopInDb.menu = shop.menu;

  if (!shopInDb._id) {
    shopInDb._id = Date.now().toString();
    fakeShops.post(shopInDb);
  }
  return shopInDb;
}
