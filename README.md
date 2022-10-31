# CafeScript
! [Responsive Mockup]

CafeScript is a fully responsive website that can be used by customers of CafeScript cafe to order their coffee/tea/pastry online and user can then just collect their order in the CafeScript shop. The website will help users/customer of CafeScipt cafe avoid queuing in the cafe and speed up the process of ordering coffee/tea/pastry from CafeScript cafe.

----

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
    - When a user clicked on the ORDER button, two things could happen. If the user is already logged in to the website, a confirmation box pops up that would ask customer if they want to confirm their order (this will give the user an oppurtunity to review their order one more time before actually ordering it) and once the user clicks on the OK button from the confirmation box, the user will receive an receipt of his order in the user page(tab in the navigation bar that displays user's name). If the user however is not yet logged in, an alert will pop up asking customer to login, as user must be logged to be able to make an order.
    - User can access this page by clicking on the Your Order tab in the navigation bar.

![Your Order Page](/assets/images/yourorderpage.jpg) 

- _User Page / Receipt Page_
    - A user won't be able to access this page if the user has not logged in. Once a user is logged in, user can access this page by clicking on their name that is being displayed in the navigation bar which will be beside the log out button.
    - This page will display all the receipt/s for each order the user has made and when collecting his/her order, user needs to show the receipt to the cafe.
    - The receipt contains the receipt number, date and time on when the ordered was made, total price of the order, items, price for each item and amount for each item.

![User Page / Receipt Page](/assets/images/receipt.jpg)

- _Login Page_
    - User can log in into the system through the log in page.
    - Log in page will ask for customer's email and password, to login. User has to input their correct email and password they used when registering.
    - If a user is not yet logged in, the Login page can be access by a user in the "LOG IN" tab from navigation bar or from the alert that pops up when a user Orders.
    - The log in page won't be available if the customer has already logged in.

![Login Page](/assets/images/loginpage.jpg)

- _Sign Up Page_
    - This is the page where a user can register and once they have completed their registration, user can then login to complete their order.
    - Sign up page will ask user for their name, email and password and user must input a valid name, email and password.
    - A user can only access this page by clicking the "Sign Up" button in the Login page.

![Sign Up Page](/assets/images/signuppage.jpg) 

- _Logout Button_
    - A user can click the logout button from the navigation bar to logout.
    - Logout button is only available when a user is logged in.

![Logout Button](/assets/images/logout.jpg)

- _Footer_
    - Footer is available in all pages and it is at the bottom of each page.
    - A user can find the CafeScript contact details in the footer.

![Footer](/assets/images/footer.jpg)

### Future Development Plans
    - To add a payment functionality. This functionality will then be mandatory for user to complete his/her order.
    - To create a functionality that will store a receipt in a database and send a receipt to CafeScript cafe everytime a user completes an order so that employers of CafeScript can see the order of each customer.

----

## Testing

### Validator Testing

- _HTML_
    - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?showsource=yes&doc=https%3A%2F%2Fjddelara01.github.io%2Fcafe-script%2F)

- _CSS_
    - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator)

- _JavaScript_
    - No errors found in when passing through the official [Jshint validator](https://jshint.com/)
        - authenticate.js
            - There are 4 functions in this file.
            - Function with the largest signature take 1 arguments, while the median is 0.5.
            - Largest function has 13 statements in it, while the median is 2.5.
            - The most complex function has a cyclomatic complexity value of 2 while the median is 1.
        - data.js
            - This is where I store my global variables, no functions are present here.
        - orderNotification.js
            - There are 2 functions in this file.
            - Function with the largest signature take 1 arguments, while the median is 0.5.
            - Largest function has 6 statements in it, while the median is 4.
            - The most complex function has a cyclomatic complexity value of 2 while the median is 1.5. 
        - receipt.js
            - There are 3 functions in this file.
            - Function with the largest signature take 1 arguments, while the median is 1.
            - Largest function has 11 statements in it, while the median is 2.
            - The most complex function has a cyclomatic complexity value of 3 while the median is 1.
        - script.js
            - There are 5 functions in this file.
            - Function with the largest signature take 2 arguments, while the median is 1.
            - Largest function has 24 statements in it, while the median is 12.
            - The most complex function has a cyclomatic complexity value of 7 while the median is 3.
            - One warning (Functions declared within loops referencing an outer scoped variable may lead to confusing semantics), but it should be okay as I have to use a global variable.
        - userLogin.js
            - There are 6 functions in this file.
            - Function with the largest signature take 1 arguments, while the median is 0.
            - Largest function has 16 statements in it, while the median is 2.
            - The most complex function has a cyclomatic complexity value of 4 while the median is 1.
        - userRegistration.js
            - There are 6 functions in this file.
            - Function with the largest signature take 1 arguments, while the median is 0.
            - Largest function has 6 statements in it, while the median is 2.5.
            - The most complex function has a cyclomatic complexity value of 4 while the median is 1.
        - youOrder.js
            - There are 15 functions in this file.
            - Function with the largest signature take 1 arguments, while the median is 0.
            - Largest function has 13 statements in it, while the median is 6.
            - The most complex function has a cyclomatic complexity value of 4 while the median is 2.
            - Three warnings (Functions declared within loops referencing an outer scoped variable may lead to confusing semantics) but should be okay as I have to use a global variable.

### Known Issues

- Delete button functionality
    - When user clicked on the delete button to remove a specific in "Your Order" page, it sometimes delete all the items in the list. However, the data in the localStorage has not been deleted. So it is more likely just a UI issue.

- Clicking on items in "Menu" page
    - Sometimes when user click on an item that they would like to order, the item does not get added into the localStorage or in the UI. User has to click the item again to make it work.

- Total price doesn't get updated
    - When a user changes the amount for an item in the "Your Order" page, the total price does not get updated. A user has to press enter first to update it which should not be the case. Total price should get updated straigh away once a amount is changed.

### Resolved Issues
- Delete button functionality
    - I noticed the the UI gets update correctly when I just refresh the page. So I added location.reload() in the updateOrder function, so that page get refreshed everytime a user clicks on the delete button. After this, I have not seen the issue occur again.

- Total price doesn't get updated
    - Issue was only noticed when I was on inspect mode. After closing inspect mode and refreshing the page, issue did not occur again.

### Unresolved Issues
- Clicking on items in "Menu" page
    - I don't see any issues in my code and the issue only occurs very intermittently. It seems that it happens when I don't fully clicked on the mouse or if I am clicking too quickly.

### Page Design in Different Devices/Browser Sizes
As the website is designed for desktop size device/browser, the images the feature section should be the same. So I will only include tablet device size / mobile device size in this section.

| Features             | Tablet (1023px and below) |  Mobile (600px and below) |
| -------------------- |:------------------------ | :------------------------ |
| Navigation Bar       | - All navigation bar links font size will adjust accordingly to fit screen size. | - All navigation bar links font size will adjust accordingly to fit screen size. |                                          
| Home Page            | - Home page content will adjust accordingly. | - Home page content will adjust accordingly.|
| Menu Page            | - The items tab and item buttons sizes will be updated accordingly. | - - The items tab and item buttons sizes will be updated accordingly. |
| Your Order Page      | - Font size and other elements will be update accordingly. | - Font size and other elements will be update accordingly. |
| Login Page           | - Login page content will be adjusted accordinly. | - Login page content will be adjusted accordinly. |
| Footer               | - Font size will become smaller | - N/A |

-----

## Deployment
As I only used HTML, CSS, JavaScript and LocalStorage, this website is deployed using *GitHub Pages*. The steps to deploy are as follows:

- In the GitHub repository, navigate to the *Settings* tab
- In the Source section select *Deploy from a branch* option in the drop-down menu
- In the Branch section select *main* option in the drop-down menu
- Keep directory set to the */root*.
- The page will reload with a link to the live site

The live link can be found here - https://jddelara01.github.io/cafe-script/

![Github Deployment Page](/assets/images/deployment.jpg)

-----

## Technologies Used

### IDE
- [GitPod](https://gitpod.io/)

### Languages and Frameworks/Resources
- [CSS3](https://www.w3.org/Style/CSS/Overview.en.html)
- [HTML5](https://developer.mozilla.org/en-US/docs/Learn/HTML)
- [JavaScript](https://www.javascript.com/)
- [LocalStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)

### Project Management and Deployment
- [GitHub](https://github.com/)

### Other
- [Chrome DevTools](https://developer.chrome.com/docs/devtools/)
- [Google Fonts](https://fonts.google.com/)
- [Fontawesome 6](https://fontawesome.com/)
- [Slack](https://slack.com/intl/en-ie/)

-----

## Credits

### Content
 - Some of the icons the website were taken from [Fontawesome 6](https://fontawesome.com/)
 - The fonts used were taken from [Google Fonts](https://fonts.google.com/)
 - The addOrder functionality was inspired by this video [Create a Shopping Cart...](https://www.youtube.com/watch?v=UcrypywtAm0&t=1460s&ab_channel=CodeExplained)
 - Add/store items in localStorage from [StackOverflow](https://stackoverflow.com/questions/12162786/adding-new-objects-to-localstorage)
 - In general, I got some of my ideas and correct syntax from [w3c](https://www.w3schools.com/jsref/jsref_obj_array.asp)

 ### Media
- The background image was taken from an free open source site [Pexels](https://www.pexels.com/)