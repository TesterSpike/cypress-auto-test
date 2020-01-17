const domain = "Domain=localhost";
const path = "Path=/staticSite";
const userNameCookieId = "userName";
const loggedInStateCookieId = "isLoggedIn";

export function getCookie(cname) {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

export function setUserNameCookie(userName) {
    document.cookie = userNameCookieId + "=" + userName + ";" + domain + ";" + path;
}

export function getUserCookie() {
    return getCookie(userNameCookieId);
}

export function setLoggedInCookie(state) {
    document.cookie = loggedInStateCookieId + "=" + state + ";" + domain + ";" + path;
}

export function getLoggedInCookie() {
    return getCookie(loggedInStateCookieId);
}