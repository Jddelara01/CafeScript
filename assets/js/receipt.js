/*jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed for receipt.js');
    showOrder();
});


/**
 * display order receipt per user
 */
function showOrder() {
    let displayOrder = document.getElementById("userOrdersWrapper");
    const receipts = JSON.parse(localStorage.getItem("RECEIPT"));
    const username = localStorage.getItem("CURRENT");
    const myItem = receipts.filter(receipt => receipt.username.toLowerCase() === username.toLowerCase());

    for (let i = 0; i < myItem.length; i++) {
        console.log(myItem[i].id, "<==id number");
        let displayId = (myItem[i].id * 1) + 1;
        displayOrder.innerHTML += `
            <div class="receiptContent">
                Receipt #: ${displayId} <br> ${myItem[i].date} <br> TOTAL: ${myItem[i].total}
            </div>
        `;
        for (let j = 0; j < myItem[i].items.length; j++) {
            let idDiv = document.getElementsByClassName("receiptContent")[i];
            idDiv.innerHTML += `  
                <div class="userOrder">
                    <p>
                    ${myItem[i].items[j].item} - ${myItem[i].items[j].price} x ${myItem[i].items[j].amount}
                    </p>
                </div>
            `;
        }
    }
}