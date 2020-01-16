import {welcomeLocator} from "../utilities/Locators";
import {setIsLoggedInCookie, setUsernameCookie} from "../pom/CookiePage";

export class WelcomePage {
    navigate() {
        cy.clearCookies();
        cy.visit('./staticSite/Welcome.html');
    }

    navigateWithCookies(username, isLoggedInState) {
        cy.clearCookies();
        if (username !== "") setUsernameCookie(username);
        setIsLoggedInCookie(isLoggedInState);
        cy.visit('./staticSite/Welcome.html');
    }

    verifyUserIsWelcomed(username) {
        cy.get(welcomeLocator.welcomeMessage).should("contain", username);
    }

    verifyErrorMessage(errorMessage) {
        cy.get(welcomeLocator.errorMessage).should("contain", errorMessage);
    }

}