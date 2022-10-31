/*jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    updateNotification();
});

// Update order notification count in Your Order nav bar when user orders
function updateNotification() {
    let orderNotification = document.getElementById("notification");
    let count = 0;
    for (let i = 0; i < addedItem.length; i++) {
        count += 1;
    }

    orderNotification.innerHTML = `
                Your Order(${count})
            `;
    console.log(orderNotification);
}