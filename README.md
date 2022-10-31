# CafeScript
! [Responsive Mockup]

CafeScript is a fully responsive website that can be used by customers of CafeScript cafe to order their coffee/tea/pastry online. The website will help users/customer of CafeScipt cafe avoid queuing in the cafe and speed up the process of ordering their coffee/tea/pastry.

## Features

In this section, I will be going through the different parts of the website and I will provide descriptions for each feature and what the feature do.

### Current Features

- _Navigation Bar_
    - Displayed at the very top of almost all of the pages of the website (except in the signup page) to help users navigate throught the site easily.
    - A site user can click on the any links of the navigation bar and it would bring them to the page that they clicked on. The navigation bar helps site users navigate through each page from all devices without having to use the "back" button to revert back to a previous page.
    - A link in the navigation bar will be underline and all letters will be uppercased once the user is on that specific page, this will help user identify which page he/she is currently in.

![Navigation Bar](/assets/images/navbar.jpg)

- _Home Page_
    - This is the first page a user will see when he/she access the website. It contains the name of the cafe (CafeScript) and some brief instructions on what the user can do.
    - It also contains a button ("Order Now!") that user can click to bring the user to the menu page.
    - A user can access the home page again by clicking "Home" from the navigation bar.

![Home Page](/assets/images/homepage.jpg)

- _Menu Page_
    - Menu page contains the different items that is available in CafeScript cafe. Items are separated in 3 types (coffee, tea and pastry) and each types contains it's own list of items.
    - All 3 types items are displayed as a tab in the menu page. A user can then click on each tab to select to display the different list of items that specific tab contains (ie. "Coffee" tab will contain: Americano, Cappucino, etc..). The tab selected by the user will be underlined and changed it's background colour to help user identify which tab he/she is currently in.
    - The list of items in each tab contains the name and price of the item. A user can then click/select an item from the list that they want to order and it will be added into the Your Order page.
    - A user, will receive an alert if the item that they have ordered is already present in the Your Order page.
    - This page can be access by user through the navigation bar "Menu" or through the "Order Now!" button in the Home page.

![Menu Page](/assets/images/menupage.jpg)  

- _Your Order Page_
    - Your Order page is where the user can see their items that they have selected from the Menu page, basically the items that user would like to order.
    - A notification of the number of items the user has added into the your order page is displayed in the "Your Order" tab in the navigation bar and this notification gets updated accordingly if the user add more items in to the Your Order page or remove an item from the Your Order page.
    - A user can remove item in the Your Order page by clicking in to the delete button(bin image).
    - A user can add an amount on each item they want to order by changing the number in the input page beside the delete button. If user accidentally input or changed the number into a zero or a negative number then the amount will be set to 1, this make sures that no invalid number will be input.
    - This page also contains the Total price of your order which gets updated everytime you make any changes to the amount of items you want to order, you remove an item or you add an item.
    - There are two buttons ("CANCEL", "ORDER") available in the Your Order Page. When a user clicked on the CANCEL button, it will remove all the items in the user Your Order page. 
    - When a user clicked on the ORDER button, two things could happen. If the user is already logged in to the website, a confirmation box pops up that would ask customer if they want to confirm their order (this will give the user an oppurtunity to review their order one more time before actually ordering it). If the user however is not yet logged in, an alert will pop up asking customer to login, as user must be logged to be able to make an order.
    - User can access this page by clicking on the Your Order tab in the navigation bar.

![Your Order Page](/assets/images/yourorderpage.jpg) 