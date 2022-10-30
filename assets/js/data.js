// Creating the menu options for each specific menu
const menus = {
  coffee: {
    name: ["Americano", "Cappucino", "Flat White", "Frappucino", "Espresso"],
    price: [2.75, 3.15, 3.75, 3.25, 3.20]
  },
  tea: {
    name: ["Green", "Ginseng", "Black", "Jasmine"],
    price: [1.80, 3.00, 1.80, 2.50]
  },
  pastry: {
    name: ["Croissant", "Chocolate Croissant", "Macarons", "Danish Bread"],
    price: [3.10, 3.25, 2.50, 3.50]
  }
};

// ordered items array to be stored in localStorage and be used to rendered ordered items in Your Order page
let orderedItems = JSON.parse(localStorage.getItem("ITEM")) || []; // convert string into an array or set as an empty array
let orderedItemsPrice = JSON.parse(localStorage.getItem("PRICE")) || [];
let orderedItemsAmount = JSON.parse(localStorage.getItem("AMOUNT")) || [];
let totalOrderedPrice = JSON.parse(localStorage.getItem("TOTAL"));
let addedItem = JSON.parse(localStorage.getItem("ORDER")) || [];


// user details array to be stored in localStorage  and be used to hold registired users details
// if localStorage for USERS is not empty, convert it to array to be able to manipulate it else, set as an empty array
let registeredUsers = localStorage.USERS ? JSON.parse(localStorage.USERS) : [];

// store user name once user has successfully logged in
let currentUser = localStorage.getItem("CURRENT");

// store number of orders
let count = localStorage.getItem("COUNT");

// store users order in localStorage
let userOrders = JSON.parse(localStorage.getItem("RECEIPT")) || [];