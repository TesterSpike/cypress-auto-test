import {loginLocator} from "../utilities/Locators";

const userName = "bob";
const password = "password";

beforeEach(() => {
    cy.visit('/site/Login.html');
});

describe("Error scenarios", () => {
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

    it("User with valid credentials will be welcomed", () => {
        cy.get(loginLocator.username).type(userName);
        cy.get(loginLocator.password).type(password);
        cy.get(loginLocator.loginButton).click();
        cy.url().should("include", "Welcome.html");
        cy.getCookie("userName").should('have', 'value', userName).and('have', 'path', "/cypress-auto-test/site");
        //cy.get('welcome message locator').should have user name
    });
});


