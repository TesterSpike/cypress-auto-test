const cookieName = "genericCompanyLoginCookie";
const userNameInput = "#username";
const passwordInput = "#password";
const loginButton = "[cy-data='login_button']";

const userName = "bob";
const password = "password";

beforeEach(() => {
    cy.clearCookie(cookieName);
    cy.visit('/site/Login.html');
});

describe("User can login successfully", () => {

    it("Login form displayed", () => {
        //user & password inputs visible with login button
        cy.get(userNameInput).should("be.visible");
        cy.get(passwordInput).should("be.visible");
        cy.get(loginButton).should("be.visible").and("to.be.disabled");
    });
    
    it("User with valid credentials will be welcomed", () => {
        cy.get(userNameInput).type(userName);
        cy.get(loginButton).should("to.be.disabled");
        cy.get(passwordInput).type(password);
        cy.get(loginButton).should("not.be.disabled");
        cy.get(loginButton).click();
        cy.url().should("include", "Welcome.html");
        //cy.getCookie(cookieName).should('exist')
        //cy.get('welcome message locator').should have user name
    });
});

describe("Error scenarios", () => {
    it("Invalid credentials", () => {
        //error message shown with invalid name and password combo
    });
    it("Missing credentials", () => {
        //error message shown when either name or password missing
        //missing information highlighted
    });
});

describe("Forgotten password", () => {
    it("forgotten", () => {
        //modal popup with email input and 'ok'
    });
});


