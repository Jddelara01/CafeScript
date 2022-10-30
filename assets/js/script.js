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
      let itemAmt = 1;
      itemPrice = itemPrice.toFixed(2);
      
      let order = {
        item: itemName,
        price: itemPrice,
        amount: itemAmt
      }

      console.log(itemName, itemPrice);

      // Add ordered item into the local storage array
      if (notOrdered(itemName)) {
        addedItem.push(order);
        localStorage.setItem("ORDER", JSON.stringify(addedItem));

        updateNotification();
      } else {
        alert("You have already ordered " + itemName + ". You can add more in the 'Your Order' page.")
      }

    })
  }
}

/**
 * Check if the order is already ordered
 */
function notOrdered(val) {
  for (let i = 0; i < orderedItems.length; i++) {
    if (val === orderedItems[i]) {
      return false;
    }
  }
  return true;
}