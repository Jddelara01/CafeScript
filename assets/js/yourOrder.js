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
    if (addedItem.length > 0) {
        for (let i = 0; i < addedItem.length; i++) {
            const newTR = `
          <tr class="tableRows">
              <td class="orderItem">${addedItem[i].item}</td>
              <td class="orderPrice" dataType="${addedItem[i].price}">€${addedItem[i].price}</td>
              <td>
                  <input class="orderAmount" type="number" dataType="${addedItem[i].item}" value="${addedItem[i].amount}">
                  <button class="removeOrderBtn" dataType="${addedItem[i].item}"><i class="fa-solid fa-trash"></i></button>
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

    for (let i = 0; i < btnRemove.length; i++) {
        let btn = btnRemove[i];
        let delItem = btn.getAttribute("dataType");
        btn.addEventListener("click", function (event) {
            let clickedBtn = event.target;
            let findItem = addedItem.find(order => order.item === delItem);
            let index = addedItem.indexOf(findItem);

            clickedBtn.parentElement.parentElement.parentElement.remove();

            // delete the specific item from the local storage
            if (findItem) {
                addedItem.splice(index, 1);
                localStorage.setItem("ORDER", JSON.stringify(addedItem));

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

    for (let i = 0; i < amountElements.length; i++) {
        let amountInput = amountElements[i];
        let updateAmt = amountInput.getAttribute("datatype");

        amountInput.addEventListener("change", function (event) {
            let changedInput = event.target;
            let findAmt = addedItem.find(order => order.item === updateAmt);
            let index = addedItem.indexOf(findAmt);
            if (isNaN(changedInput.value) || changedInput.value <= 0) {
                changedInput.value = 1;
                console.log(changedInput.value);
            } else {
                if (findAmt) {
                    addedItem[index].amount = changedInput.value;
                    console.log(addedItem[i].amount);
                    localStorage.setItem("ORDER", JSON.stringify(addedItem));
                }
                console.log("CHECK Updated amount");
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
                localStorage.removeItem("ORDER");
                addedItem = [];
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
            localStorage.removeItem("ORDER");
            addedItem = [];
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

    for (let i = 0; i < addedItem.length; i++) {
        value.push({
            "item": addedItem[i].item,
            "price": addedItem[i].price
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