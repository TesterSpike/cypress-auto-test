const userNameCookie = "userName";
const isLoggedInCookie = "isLoggedIn";

export function setUsernameCookie(username) {
    cy.setCookie(userNameCookie, username.toString());
}

export function verifyUsernameCookie(userName) {
    cy.getCookie(userNameCookie).should("exist");
    cy.getCookie(userNameCookie).should('have', 'value', userName).and('have', 'path', "/staticSite");
}

export function setIsLoggedInCookie(isLoggedInState) {
    cy.setCookie(isLoggedInCookie, isLoggedInState.toString());
}

export function verifyIsLoggedInCookie(loggedInState) {
    cy.getCookie(isLoggedInCookie).should("have", "value", loggedInState).and('have', 'path', "/staticSite");
}