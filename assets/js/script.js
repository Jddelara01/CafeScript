// Creating the menu options for each specific menu
let menus = {
  coffee: {
    name: ["Americano", "Cappucino", "Flat White", "Frappucino"],
    price: [2.75, 3.15, 3.75, 3.25]
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

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
});

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

// Display the element with id "defaultTab" when opening the menu page
document.getElementById("defaultTab").click();


/**
 * Display the menu options based on the tab clicked
 */
function displayMenu(tab) {
  let menuType;
  if (tab === "coffeeMenu") {
    menuType = document.getElementById("coffeeMenu");
    menuType.innerHTML = "";
    menuName = menus.coffee.name;
    coffeePrice = menus.coffee.price;

    // loop through all the coffee menu options and price and add each of them in a button
    for (let i = 0; i < menuName.length; i++) {
      menuType.innerHTML += `
      <button class="btnOptions" dataType="${menuName[i]}"><h2 class="optionName">${menuName[i]}</h2> <p class="price">€${coffeePrice[i]}</p></button>
      `;
    }
  } else if (tab === "teaMenu") {
    menuType = document.getElementById("teaMenu");
    menuType.innerHTML = "";
    menuName = menus.tea.name;
    coffeePrice = menus.tea.price;

    // loop through all the tea menu options and price and add each of them in a button
    for (let i = 0; i < menuName.length; i++) {
      menuType.innerHTML += `
      <button class="btnOptions" dataType="${menuName[i]}"><h2 class="optionName">${menuName[i]}</h2> <p class="price">€${coffeePrice[i]}</p></button>
      `;
    }
  } else if (tab === "pastryMenu") {
    menuType = document.getElementById("pastryMenu");
    menuType.innerHTML = "";
    menuName = menus.pastry.name;
    coffeePrice = menus.pastry.price;

    // loop through all the pastry menu options and price and add each of them in a button
    for (let i = 0; i < menuName.length; i++) {
      menuType.innerHTML += `
      <button class="btnOptions" dataType="${menuName[i]}"><h2 class="optionName">${menuName[i]}</h2> <p class="price">€${coffeePrice[i]}</p></button>
      `;
    }
  } else {
    alert("Error found! Tab name is unavailable." );
  }
}