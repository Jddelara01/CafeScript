document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    updateOrder();
    removeOrder();
    updateAmount();
    selectBtnOption();
    console.log(totalOrderedPrice);
});

/**
 * update and display all ordered items in the Your order page
 */
function updateOrder() {
    let yourOrder = document.getElementsByClassName("tableHeadings")[0];
    if (orderedItems.length > 0) {
        for (let i = 0; i < orderedItems.length; i++) {
            const newTR = `
          <tr class="tableRows">
              <td class="orderItem">${orderedItems[i]}</td>
              <td class="orderPrice" dataType="${orderedItemsPrice[i]}">€${orderedItemsPrice[i]}</td>
              <td>
                  <input class="orderAmount" type="number" value="1">
                  <button class="removeOrderBtn" dataType="${orderedItems[i]}"><i class="fa-solid fa-trash"></i></button>
              </td>
          </tr>`;
            yourOrder.insertAdjacentHTML("afterend", newTR);
        }
    } else {
        // delete all rows in the order table
        let rows = document.querySelectorAll(".tableRows");

        rows.forEach(row => {
            row.remove();
        });
    }

    updateTotalPrice();
}

/**
 * To remove an order from the list
 */
function removeOrder() {
    let btnRemove = document.getElementsByClassName("removeOrderBtn");
    let reverse = orderedItems.reverse(); // need to reverse array order to match the index of the for loop below to get the dataType of each clicked button

    for (let i = 0; i < btnRemove.length; i++) {
        let btn = btnRemove[i];
        let delItem = btn.getAttribute("dataType");
        btn.addEventListener("click", function (event) {
            let clickedBtn = event.target;
            clickedBtn.parentElement.parentElement.parentElement.remove();

            // delete the specific item from the local storage
            if (delItem === reverse[i]) {
                orderedItems.splice(i, 1);
                orderedItemsPrice.splice(i, 1);
                orderedItemsAmount.splice(i, 1);
                localStorage.setItem("ITEM", JSON.stringify(orderedItems));
                localStorage.setItem("PRICE", JSON.stringify(orderedItemsPrice));
                localStorage.setItem("AMOUNT", JSON.stringify(orderedItemsAmount));
                location.reload();
            }

            updateTotalPrice();
            updateNotification();
        })
    }
}

/**
 * Update the amount of ordered item and check if the user inputs a number 
 * and check so that the amount input is not less than or equals to 0
 */
function updateAmount() {
    let amountElements = document.getElementsByClassName("orderAmount");

    for (let i = amountElements.length - 1; i >= 0 ; i--) {
        let amountInput = amountElements[i];

        amountInput.addEventListener("change", function (event) {
            let changedInput = event.target;
            if (isNaN(changedInput.value) || changedInput.value <= 0) {
                changedInput.value = 1;
                console.log(changedInput.value);
            } else {
                orderedItemsAmount[i] = changedInput.value;
                console.log(orderedItemsAmount[i]);
                localStorage.setItem("AMOUNT", JSON.stringify(orderedItemsAmount));
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
    localStorage.setItem("TOTAL", totalAmount);
}

/**
 * Cancel your order or Proceed with your order
 */
function selectBtnOption() {
    let btnOptions = document.getElementsByClassName("yourOrderBtn");
    for (let i = 0; i < btnOptions.length; i++) {
        let selectedBtn = btnOptions[i];
        selectedBtn.addEventListener("click", function (event) {
            let select = event.target;
            if (select.innerHTML === "ORDER" && orderedItems.length > 0) {
                confirmOrder();
            } else if (select.innerHTML === "CANCEL") {
                console.log(select.innerHTML);
                localStorage.removeItem("ITEM");
                localStorage.removeItem("PRICE");
                localStorage.removeItem("AMOUNT");
                orderedItems = [];
                updateOrder();
                updateNotification();
            } else {
                alert("You have not ordered anything!")
            };
        })
    }
}

/**
 * confirmation box
 */
function confirmOrder() {
    //let msg;
    if (!currentUser) {
        if (confirm("You need to first login to proceed with your order")) {
            window.location.href = "login.html"
        } else {
            location.reload();
        }
    } else {
        if (confirm("Please confirm your order!")) {
            orderConfirmed();
            localStorage.removeItem("ITEM");
            localStorage.removeItem("PRICE");
            localStorage.removeItem("AMOUNT");
            orderedItems = [];
            updateOrder();
            updateNotification();
            window.location.href = "userOrders.html"
            showOrder();
        } else {
            location.reload();
        }
    }
}

/**
 * store your order in localStorage and display receipt in user page(navbar link displaying current user name)
 */
function orderConfirmed() {
    generateOrderNumber();
    let d = new Date();
    let totalVal = JSON.parse(localStorage.getItem("TOTAL"));
    let value = [];

    for (let i = 0; i < orderedItems.length; i++) {
        value.push({
            "item": orderedItems[i],
            "price": orderedItemsPrice[i]
        });
    }

    // create new object
    let receipt = {
        id: count,
        date: d.toString(),
        items: value,
        total: totalVal,
        username: currentUser

    };

    userOrders.push(receipt)
    let jsonObj = JSON.stringify(userOrders);
    localStorage.setItem("RECEIPT", jsonObj);
}

/**
 * generate an order number per new order
 */
function generateOrderNumber() {
    if (!localStorage.COUNT) {
        localStorage.setItem("COUNT", "1")
    } else {
        let orderNum = Number(localStorage.getItem("COUNT"));
        localStorage.setItem("COUNT", ++orderNum);
    }
}