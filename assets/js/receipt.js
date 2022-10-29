document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed for receipt.js');
    showOrder();
    console.log(userOrders[0].id);
});


/**
 * display order receipt per user
 */
function showOrder() {
    let displayOrder = document.getElementById("userOrdersWrapper");
    for (let i = 0; i < userOrders.length; i++) {
        if (userOrders[i].username === currentUser) {
            displayOrder.innerHTML += `
                <div>ID: ${userOrders[i].id}</div>
            `;
            for (let j = 0; j < userOrders[i].items.length; j++) {
                console.log("Check " + j);
                displayOrder.innerHTML += `
                    <div class="userOrder">${userOrders[i].items[j].item} <span>${userOrders[i].items[j].price}</span></div> 
                `;
            }
        } else {
            displayOrder.innerHTML += `
                <h2>You have no orders...</h2>
            `
        }
    }
}