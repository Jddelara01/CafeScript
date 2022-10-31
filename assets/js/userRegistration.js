/*jshint esversion: 6 */

document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');
    getUser();
    cancelReg();
});

let uName = document.getElementById("userName");
let uEmail = document.getElementById("userEmail");
let uPsw = document.getElementById("userPsw");

/**
 * check if the user input correct details and then register user
 */
function getUser() {
    let btn = document.getElementById("signUpButton");
    btn.addEventListener("click", function () {
        if (!uName.checkValidity()) {
            alert("Input a proper name!");
        } else if (!uEmail.checkValidity()) {
            alert("Input a proper email!");
        } else if (!uPsw.checkValidity()) {
            alert("Password already used, choose another password!");
        } else {
            registerUser();
            alert("Congratulations, you have successully signed up! You can now login!");
        }
    });
}

/**
 * Cancel user registration
 */
function cancelReg() {
    let btnCancel = document.getElementById("cancelBtn");
    btnCancel.addEventListener("click", function () {
        window.location.href = "login.html";
    });
}

/**
 * register user details into localStorage
 */
function registerUser() {
    let userDetails = {
        name: uName.value,
        email: uEmail.value,
        password: uPsw.value
    };

    console.log("User registered!");

    registeredUsers.push(userDetails); // registeredUser is declared in data.js
    localStorage.setItem("USERS", JSON.stringify(registeredUsers)); // convert array into string as localStorage can only accept strings
}