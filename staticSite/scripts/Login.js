import {setUserNameCookie, setLoggedInCookie} from "../scripts/CookieHandler.js"

let userNameElement;
let passwordElement;

/** Import used so this is now a module and the functions have to be exposed to the html page**/
window.OnLoad = OnLoad;
window.VerifyLogin = VerifyLogin;

function setMessage(message) {
    document.getElementById("user_message").innerText = message;
}

export function VerifyLogin(loginForm) {
    const userName = userNameElement.value;
    const password = passwordElement.value;
    if (userName.toLowerCase() === "fake" || password.toLowerCase() === "fake") {
        setMessage("Please supply a valid user name and password");
    } else {
        setUserNameCookie(userName);
        setLoggedInCookie(true);
        loginForm.submit();
    }

}

export function OnLoad() {
    userNameElement = document.getElementById("username");
    passwordElement = document.getElementById("password");

    let isUserNameEntered = userNameElement.value !== "";
    let isPasswordEntered = passwordElement.value !== "";

    function enableLogin() {
        document.getElementById("submitBtn").disabled = !(isUserNameEntered && isPasswordEntered);
    }

    userNameElement.addEventListener("input", () => {
        setMessage("");
        isUserNameEntered = userNameElement.value !== "";
        enableLogin();
    });

    passwordElement.addEventListener("input", () => {
        setMessage("");
        isPasswordEntered = passwordElement.value !== "";
        enableLogin();
    });
}
