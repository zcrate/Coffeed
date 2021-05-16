export const allShops = [
  {
    _id: "0123",
    name: "The Joe",
    hours: {
      open: "00:00",
      close: "17:00",
    },
    menu: [
      { name: "a hot cup of joe", price: 4, category: "beverages" },
      { name: "a cold one", price: 4, category: "beverages" },
      { name: "juice", price: 3, category: "beverages" },
      { name: "soft drink", price: 3, category: "beverages" },
      { name: "donut", price: 2, category: "food" },
      { name: "sandwich", price: 7, category: "food" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    _id: "2345",
    name: "Dave's Place",
    hours: {
      open: "00:00",
      close: "20:00",
    },
    menu: [
      { name: "coffee", price: 8, category: "drinks" },
      { name: "tea", price: 7, category: "drinks" },
      { name: "fancy water", price: 6, category: "drinks" },
      { name: "bagel", price: 4, category: "eats" },
      { name: "sandwich", price: 13, category: "eats" },
      { name: "wrap", price: 15, category: "eats" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    _id: "4567",
    name: "Rise and Shine Cafe",
    hours: {
      open: "05:00",
      close: "11:00",
    },
    menu: [
      { name: "coffee", price: 4, category: "drinks" },
      { name: "tea", price: 4, category: "drinks" },
      { name: "cappuccino", price: 6, category: "drinks" },
      { name: "bagel", price: 3, category: "food" },
      { name: "donut", price: 2, category: "food" },
      { name: "breakfast burrito", price: 9, category: "food" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    _id: "6789",
    name: "Martha & Martha's",
    hours: {
      open: "08:00",
      close: "22:00",
    },
    menu: [
      { name: "the darkest roast", price: 4, category: "drinks" },
      { name: "medium roast", price: 4, category: "drinks" },
      { name: "tea", price: 4, category: "drinks" },
      { name: "bagel", price: 4, category: "food" },
      { name: "donut", price: 3, category: "food" },
      { name: "superwrap", price: 8, category: "food" },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

function getShop(id) {
  return allShops.find((s) => s._id === id);
}

function getAllShops() {
  return allShops;
}

function addShop(shop) {
  allShops.push(shop);
}

export default {
  get: getShop,
  getAll: getAllShops,
  post: addShop,
};
