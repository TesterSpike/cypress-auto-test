import {loginLocator, welcomeLocator} from "../../../utilities/Locators";

const userName = "bob";
const password = "password";

describe("Error scenarios", () => {
    beforeEach(() => {
        cy.visit('./staticSite/Login.html');
    });

    it("Invalid credentials", () => {
        cy.get(loginLocator.username).type("fake");
        cy.get(loginLocator.password).type(password);
        cy.get(loginLocator.loginButton).click();
        cy.get(loginLocator.errorMessage).should("contain", "valid user name and password");
        cy.get(loginLocator.username).clear().type(userName);
        cy.get(loginLocator.errorMessage).should("contain", "");
        cy.get(loginLocator.password).clear().type("fake");
        cy.get(loginLocator.loginButton).click();
        cy.get(loginLocator.errorMessage).should("contain", "valid user name and password");
    });
    it("Missing credentials", () => {
        //Login button is only enabled if both user name and password are entered
        cy.get(loginLocator.username).should("be.visible");
        cy.get(loginLocator.password).should("be.visible");
        cy.get(loginLocator.loginButton).should("be.visible").and("to.be.disabled");
        cy.get(loginLocator.username).type(userName);
        cy.get(loginLocator.loginButton).should("to.be.disabled");
        cy.get(loginLocator.password).type(password);
        cy.get(loginLocator.loginButton).should("not.be.disabled");
        cy.get(loginLocator.username).clear();
        cy.get(loginLocator.loginButton).should("to.be.disabled");
    });
});

describe("Forgotten password", () => {
    it("forgotten", () => {
        //modal popup with email input and 'ok'
    });
});

describe("User can login successfully", () => {
    beforeEach(() => {
        cy.visit('./staticSite/Login.html');
    });

    it("User with valid credentials will be welcomed", () => {
        cy.get(loginLocator.username).type(userName);
        cy.get(loginLocator.password).type(password);
        cy.get(loginLocator.loginButton).click();
        cy.getCookie("userName").should('have', 'value', userName).and('have', 'path', "/staticSite");
        cy.getCookie("isLoggedIn").should("have", "value", true).and('have', 'path', "/staticSite");
        cy.url().should("include", "Welcome.html");
        //This test is better placed in the welcome component tests as the result has nothing to do with the form logic
        //cy.get(welcomeLocator.welcomeMessage).should("contain", userName);
    });
});


