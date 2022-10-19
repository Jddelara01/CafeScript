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
    for(let i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }

    // Remove the background color and text decoration of all tabs
    let tabLinks;
    tabLinks = document.getElementsByClassName("tablink");
    for(let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].style.backgroundColor = "";
      tabLinks[i].style.textDecoration = "none";
    }


    // Display the specific clicked tab content
    document.getElementById(tabName).style.display = "block";

    // Add background color and underline the specific clicked tab
    element.style.backgroundColor = "rgba(238, 164, 127, 0.8)";
    element.style.textDecoration = "underline";

  }

  // Display the element with id "defaultTab" when opening the menu page
  document.getElementById("defaultTab").click();

/**
 * Display the menu options based on the tab clicked
 */
function displayMenu(menuType) {
  
}