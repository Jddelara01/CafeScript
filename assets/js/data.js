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
  let orderedItems = JSON.parse(localStorage.getItem("ITEM")) || []; // convert string into an array or stay as an empty array
  let orderedItemsPrice = JSON.parse(localStorage.getItem("PRICE")) || [];;


// user details array to be stored in localStorage  and be used to hold registired users details
let registeredUsers = localStorage.USERS ? JSON.parse(localStorage.USERS) : [];
  