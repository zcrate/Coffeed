import http from "./httpService";

const apiEndpoint = "/shops";

function shopUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getShops() {
  return http.get(apiEndpoint);
}

export function getShop(id) {
  return http.get(shopUrl(id));
}

export function deleteShop(id) {
  return http.delete(shopUrl(id));
}

export function saveShop(shop) {
  if (shop._id) {
    const body = { ...shop };
    delete body._id;
    delete body.hours._id;
    body.menu.forEach((item) => {
      delete item._id;
    });
    console.log(JSON.stringify(body));
    console.log(shopUrl(shop._id));
    return http.put(shopUrl(shop._id), body);
  }

  console.log(JSON.stringify(shop));
  return http.post(apiEndpoint, shop);
}
