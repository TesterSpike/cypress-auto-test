import {loginLocator} from "../utilities/Locators";

export class LoginPage {
    navigate() {
        cy.visit('./staticSite/Login.html');
    }

    clearUsername() {
        cy.get(loginLocator.username).clear();
    }

    enterUsername(userName) {
        this.clearUsername();
        cy.get(loginLocator.username).type(userName);
    }

    clearPassword() {
        cy.get(loginLocator.password).clear();
    }

    enterPassword(password) {
        this.clearPassword();
        cy.get(loginLocator.password).type(password);
    }

    enterLoginDetails(userName, password) {
        this.enterUsername(userName);
        this.enterPassword(password);
        cy.get(loginLocator.loginButton).click();
    }

    verifyErrorMessage(errorMessage) {
        cy.get(loginLocator.errorMessage).should("contain", errorMessage);
    }

    verifyLoginElementStates(isLoginDetailsEntered) {
        cy.get(loginLocator.username).should("be.visible");
        cy.get(loginLocator.password).should("be.visible");
        cy.get(loginLocator.loginButton).should("be.visible");
        if (isLoginDetailsEntered) {
            console.log("login button should not be disabled");
            cy.get(loginLocator.loginButton).should("not.be.disabled");
        } else {
            console.log("login button should be disabled");
            cy.get(loginLocator.loginButton).should("to.be.disabled");
        }
    }

    clearForm() {
        this.clearUsername();
        this.clearPassword();
    }
}