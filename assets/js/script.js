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

// ordered items array
let orderedItems = JSON.parse(localStorage.getItem("ITEM")) || [];
let orderedItemsPrice = JSON.parse(localStorage.getItem("PRICE")) || [];;

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  updateOrder();
  removeOrder();
  updateAmount();
});


// Display the element with id "defaultTab" when opening the menu page
document.getElementById("defaultTab").click();

/**
 * To open the menu that the user clicked 
 */
function openMenu(tabName, element) {
  // Hide all elements with class name "menuTab" by default 
  let tabContent;
  tabContent = document.getElementsByClassName("menuTab");
  for (let i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove the background color and text decoration of all tabs
  let tabLinks;
  tabLinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].style.backgroundColor = "";
    tabLinks[i].style.textDecoration = "none";
  }


  // Display the specific clicked tab content
  document.getElementById(tabName).style.display = "block";
  console.log(tabName);
  displayMenu(tabName);

  // Add background color and underline the specific clicked tab
  element.style.backgroundColor = "rgba(238, 164, 127, 0.8)";
  element.style.textDecoration = "underline";
}


/**
 * Display the menu options based on the tab clicked
 */
function displayMenu(tab) {
  let menuType;
  let menuName;
  let priceArray;
  if (tab === "coffeeMenu") {
    menuType = document.getElementById("coffeeMenu");
    menuType.innerHTML = "";
    menuName = menus.coffee.name;
    priceArray = menus.coffee.price;

    // loop through all the coffee menu options and price and add each of them in a button
    for (let i = 0; i < menuName.length; i++) {
      menuType.innerHTML += `
      <button class="btnOptions" dataType="${menuName[i]}"><h2 class="optionName">${menuName[i]}</h2> <p class="price">€${priceArray[i].toFixed(2)}</p></button>
      `;
    }
  } else if (tab === "teaMenu") {
    menuType = document.getElementById("teaMenu");
    menuType.innerHTML = "";
    menuName = menus.tea.name;
    priceArray = menus.tea.price;

    // loop through all the tea menu options and price and add each of them in a button
    for (let i = 0; i < menuName.length; i++) {
      menuType.innerHTML += `
      <button class="btnOptions" dataType="${menuName[i]}"><h2 class="optionName">${menuName[i]}</h2> <p class="price">€${priceArray[i].toFixed(2)}</p></button>
      `;
    }
  } else if (tab === "pastryMenu") {
    menuType = document.getElementById("pastryMenu");
    menuType.innerHTML = "";
    menuName = menus.pastry.name;
    priceArray = menus.pastry.price;

    // loop through all the pastry menu options and price and add each of them in a button
    for (let i = 0; i < menuName.length; i++) {
      menuType.innerHTML += `
      <button class="btnOptions" dataType="${menuName[i]}"><h2 class="optionName">${menuName[i]}</h2> <p class="price">€${priceArray[i].toFixed(2)}</p></button>
      `;
    }
  } else {
    alert("Error found! Tab name is unavailable.");
  }

  addOrder();
}

/**
 * Add selected item to Your Order
 */
function addOrder() {
  let orderType = document.getElementsByClassName("btnOptions");

  for (let i = 0; i < orderType.length; i++) {
    let order = orderType[i];
    order.addEventListener("click", function (event) {
      let clickedItem = event.target;
      let itemName = clickedItem.getAttribute("dataType");
      let itemPrice = parseFloat(clickedItem.getElementsByClassName("price")[0].innerHTML.replace("€", "")); // convert the price into a number

      itemPrice = itemPrice.toFixed(2);
      console.log(itemName, itemPrice);

      orderedItems.push(itemName);
      localStorage.setItem("ITEM", JSON.stringify(orderedItems));
      orderedItemsPrice.push(itemPrice);
      localStorage.setItem("PRICE", JSON.stringify(orderedItemsPrice));

      updateOrder();
    })
  }
}

function updateOrder() {
  let yourOrder = document.getElementsByClassName("tableHeadings")[0];
  for (let i = 0; i < orderedItems.length; i++) {
    const newTR = `
        <tr class="tableRows">
            <td class="orderItem">${orderedItems[i]}</td>
            <td class="orderPrice">€${orderedItemsPrice[i]}</td>
            <td>
                <input class="orderAmount" type="number" value="1">
                <button class="removeOrderBtn"><i class="fa-solid fa-trash"></i></button>
            </td>
        </tr>`;
    yourOrder.insertAdjacentHTML("afterend", newTR);
  }

  console.log(document.getElementsByClassName("tableRows"));
}

/**
 * To remove an order from the list
 */
 function removeOrder() {
  let btnRemove = document.getElementsByClassName("removeOrderBtn");
  for (let i = 0; i < btnRemove.length; i++) {
    let btn = btnRemove[i];
    btn.addEventListener("click", function (event) {
      let clickedBtn = event.target;
      clickedBtn.parentElement.parentElement.parentElement.remove();

      updateTotalPrice();
    })
  }
}


/**
 * Update the amount of ordered item and check if the user inputs a number 
 * and check so that the amount input is not less than or equals to 0
 */
function updateAmount() {
  let amountElements = document.getElementsByClassName("orderAmount");
  for (let i = 0; i < amountElements.length; i++) {
    let amountInput = amountElements[i];

    amountInput.addEventListener("change", function (event) {
      let changedInput = event.target;
      if (isNaN(changedInput.value) || changedInput.value <= 0) {
        changedInput.value = 1;
        console.log(changedInput.value);
      }
      updateTotalPrice();
    })
  }
}

/**
 * Update the total price amount of your order/s
 */
function updateTotalPrice() {
  let orderedItem = document.getElementById("orders");
  let itemRows = orderedItem.getElementsByClassName("tableRows");
  let totalAmount = 0;
  for (let i = 0; i < itemRows.length; i++) {
    let itemRow = itemRows[i];
    let itemPrice = itemRow.getElementsByClassName("orderPrice")[0];
    let itemAmount = itemRow.getElementsByClassName("orderAmount")[0];
    let priceValue = parseFloat(itemPrice.innerText.replace("€", "")); // convert the price into a number
    let amount = itemAmount.value;
    totalAmount = totalAmount + (Math.round(((priceValue * amount) + Number.EPSILON) * 100) / 100); // get total amount and round number to 2 decimal places
  }

  totalAmount = totalAmount.toFixed(2);
  document.getElementById("totalPrice").innerText = "€" + totalAmount;
}