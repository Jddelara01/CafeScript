document.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed for login page');
    loginUser();
});

/**
 * login once the login button is clicked
 */
function loginUser() {
    let btnSelected = document.getElementById("loginButton");
    btnSelected.addEventListener("click", function () {
        login();
    })
}

function login() {
    let userEmail = document.getElementById("loginEmail").value;
    let userPsw = document.getElementById("loginPsw").value;
    if (localStorage.getItem("USERS")) {
        let usersStored = JSON.parse(localStorage.getItem("USERS")); // convert to array
        let userMatched = usersStored.filter(user => {
            return userEmail === user.email && userPsw === user.password;
        })

        if (userMatched.length) {
            console.log("HI!" + JSON.stringify(usersStored));
            //alert("You have successfully login!" );
        } else {
            alert("Incorrect email/password, please try again.");
        }
    } else {
        alert("Incorrect email/password, please try again.");
    }
}