document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed for receipt.js');
    showOrder();
    console.log(typeof orderedItemsAmount);
});


/**
 * display order receipt per user
 */
function showOrder() {
    let displayOrder = document.getElementById("userOrdersWrapper");
    if (currentUser !== null) {
        for (let i = 0; i < userOrders.length; i++) {
            if (userOrders[i].username === currentUser) {
                let displayId = (userOrders[i].id * 1) + 1; // convert string to a number
                displayOrder.innerHTML += `
                <div class="receiptContent">Receipt #: ${displayId} <br> ${userOrders[i].date} 
                <br> TOTAL: ${userOrders[i].total}</div>
            `;
                for (let j = 0; j < userOrders[i].items.length; j++) {
                    let idDiv = document.getElementsByClassName("receiptContent")[i];
                    idDiv.innerHTML += `
                    <div class="userOrder">${userOrders[i].items[j].item} <span>${userOrders[i].items[j].price}</span></div>
                `;
                }
            }
        }
    } else {
        displayOrder.innerHTML += `
                <h2>You have no orders...</h2>
            `;
    }
}