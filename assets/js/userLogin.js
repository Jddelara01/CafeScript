document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed for login page');
    loginUser();
    goSignUp();
});

/**
 * login once the login button is clicked
 */
function loginUser() {
    let btnSelected = document.getElementById("loginButton");
    btnSelected.addEventListener("click", login);
}

function goSignUp() {
    let select = document.getElementById("signUpBtn");
    select.addEventListener("click", function () {
        window.location.href = "signup.html"
    })
}

/**
 * if user login details is correct, user can login else user has to re-enter login details
 */
function login() {
    let userEmail = document.getElementById("loginEmail").value;
    let userPsw = document.getElementById("loginPsw").value;
    if (localStorage.getItem("USERS")) {
        let usersStored = JSON.parse(localStorage.getItem("USERS")); // convert to array

        let findUser = usersStored.find(user => user.email === userEmail);

        if (findUser) {
            if (findUser.password === userPsw) {
                currentUser = findUser.name
                localStorage.setItem("CURRENT", currentUser);
                alert("Hi " + findUser.name);
            } else {
                alert("Incorrect email/password, please try again.");
                event.preventDefault();
            }
        } else {
            alert("Incorrect email/password, please try again.");
            event.preventDefault();
        }
    } else {
        alert("Incorrect email/password, please try again.");
        event.preventDefault();
    }
}