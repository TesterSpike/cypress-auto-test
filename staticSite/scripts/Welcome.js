import {getUserCookie, getLoggedInCookie} from "../scripts/CookieHandler.js";

window.OnLoad = OnLoad;

export function OnLoad() {
    const userName = getUserCookie();
    const isLoggedIn = getLoggedInCookie();
    if(isLoggedIn) {
        if(userName !== "") {
            document.getElementById("welcome_message").innerText = "Welcome, " + getUserCookie();
        } else {
            document.getElementById("user_message").innerText = "There has been a problem with your login, please retry."
        }
    } else {
        document.getElementById("user_message").innerText = "You need to be signed in to access this site."
    }

}