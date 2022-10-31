/*jshint esversion: 6 */
// if a user is logged in in the system

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed for authentication');
    logOutUser();
    authenticated();
});


/**
 * Check if user logged in successfully then display person name in nav bar
 */
function authenticated() {
    let displayName = document.getElementById("orderHistory");
    let displayLogoutBtn = document.getElementById("logOut");
    let hideLink = document.getElementById("loginPage");
    let displayUserName = document.getElementById("displayUser");
    console.log(currentUser);
    if(currentUser) {
        displayUserName.innerHTML = currentUser;
        displayName.style.display = "block";
        displayLogoutBtn.style.display = "block";
        hideLink.style.display = "none";
    } else {
        displayName.style.display = "none";
        displayLogoutBtn.style.display = "none";
        hideLink.style.display = "block";
    }
}


/**
 * Logs out the current user
 */
function logOutUser() {
    let logOutBtn = document.getElementById("logOut");
    logOutBtn.addEventListener("click", function (event) {
        localStorage.removeItem("CURRENT");
        window.location.href = "index.html";
    });
}