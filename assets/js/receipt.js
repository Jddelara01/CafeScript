document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed for receipt.js');
    showOrder();
});


/**
 * display order receipt
 */
 function showOrder() {
    let displayOrder = document.getElementById("userOrdersWrapper");
    if (userOrders.username === currentUser) {
        displayOrder.innerHTML += `
            <div>ID: ${userOrders.id}</div>
        `;
        for (let i = 0; i < userOrders.items.length; i++) {
            console.log("Check " + i);
            displayOrder.innerHTML += `
                <div class="userOrder">${userOrders.items[i].item} <span>${userOrders.items[i].price}</span></div> 
            `;
        }
    } else {
        displayOrder.innerHTML += `
            <h2>You have no orders...</h2>
        `
    }
}