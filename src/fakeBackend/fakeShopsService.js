import fakeShops from "./fakeShops";

export function getAllShops() {
  return fakeShops.getAll();
}

export function getShop(id) {
  return fakeShops.get(id);
}

export function saveShop(shop) {
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
