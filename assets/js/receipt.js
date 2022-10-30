document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed for receipt.js');
    showOrder();
});


/**
 * display order receipt per user
 */
function showOrder() {
    let displayOrder = document.getElementById("userOrdersWrapper");
    if (currentUser !== null) {
        for (let i = 0; i < userOrders.length; i++) {
            console.log(userOrders[i].username);
            if (userOrders[i].username === currentUser) {
                let displayId = (userOrders[i].id * 1) + 1; // convert string to a number
                displayOrder.innerHTML += `
                <div class="receiptContent">Receipt #: ${displayId} <br> ${userOrders[i].date} 
                <br> TOTAL: ${userOrders[i].total}
                </div>
            `;
                for (let j = 0; j < userOrders[i].items.length; j++) {
                    let idDiv = document.getElementsByClassName("receiptContent")[i];
                    //console.log(idDiv);
                    idDiv.innerHTML += `  
                    <div class="userOrder">
                        <p>
                        ${userOrders[i].items[j].item} - ${userOrders[i].items[j].price} x ${userOrders[i].items[j].amount}
                        </p>
                    </div>
                `;
                }
            } else {
                console.log("This order is not for the user");
            }
        }
    } else {
        console.log("This order is not for the user");
    }
}