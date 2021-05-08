export const allShops = [
  {
    _id: "0123",
    name: "The Joe",
    hours: {
      open: "05:00",
      close: "17:00",
    },
    menu: [
      {
        drinks: [
          { item: "a hot cup of joe", price: 4 },
          { item: "a cold one", price: 4 },
          { item: "juice", price: 3 },
          { item: "soft drink", price: 3 },
        ],
      },
      {
        food: [
          { item: "donut", price: 2 },
          { item: "sandwich", price: 7 },
        ],
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    _id: "2345",
    name: "Dave's Place",
    hours: {
      open: "05:00",
      close: "20:00",
    },
    menu: [
      {
        drinks: [
          { item: "coffee", price: 8 },
          { item: "tea", price: 7 },
          { item: "fancy water", price: 6 },
        ],
      },
      {
        food: [
          { item: "bagel", price: 4 },
          { item: "sandwich", price: 13 },
          { item: "wrap", price: 15 },
        ],
      },
    ],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },

  {
    _id: "4567",
    name: "Rise and Shine Cafe",
    hours: {
      open: "07:00",
      close: "16:00",
    },
    menu: [
      {
        drinks: [
          { item: "coffee", price: 4 },
          { item: "tea", price: 4 },
          { item: "cappuccino", price: 6 },
        ],
      },
      {
        eats: [
          { item: "bagel", price: 3 },
          { item: "donut", price: 2 },
          { item: "breakfast burrito", price: 9 },
        ],
      },
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
      {
        drinks: [
          { item: "the darkest roast", price: 4 },
          { item: "medium roast", price: 4 },
          { item: "tea", price: 4 },
        ],
      },
      {
        food: [
          { item: "bagel", price: 4 },
          { item: "donut", price: 3 },
          { item: "superwrap", price: 8 },
        ],
      },
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
