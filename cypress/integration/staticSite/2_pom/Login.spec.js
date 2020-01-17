import {LoginPage} from "../../../pom/LoginPage";
import {verifyIsLoggedInCookie, verifyUsernameCookie} from "../../../pom/CookiePage";

const userName = "Jack";
const password = "passwords";
const loginPage = new LoginPage();

describe("Error scenarios (POM)", () => {
    beforeEach(() => {
        loginPage.navigate();
        loginPage.clearForm();
    });

    it("Invalid credentials", () => {
        loginPage.enterLoginDetails("fake", password);
        loginPage.verifyErrorMessage("valid user name and password");
        loginPage.clearUsername();
        loginPage.verifyErrorMessage("");
        loginPage.enterLoginDetails(userName, "fake");
        loginPage.verifyErrorMessage("valid user name and password");

    });

    it("Missing credentials", () => {
        //Login button is only enabled if both user name and password are entered
        loginPage.verifyLoginElementStates(false);
        loginPage.enterUsername(userName);
        loginPage.verifyLoginElementStates(false);
        loginPage.enterPassword(password);
        loginPage.verifyLoginElementStates(true);
        loginPage.clearUsername();
        loginPage.verifyLoginElementStates(false);
    });
});

describe("Forgotten password (POM)", () => {
    it("forgotten", () => {
        //modal popup with email input and 'ok' - cypress does not handle this scenario
        cy.log("Test not yet defined");
    });
});

describe("User can login successfully (POM)", () => {
    before(() => {
        loginPage.navigate();
    });

    it("User with valid credentials will be logged in", () => {
        verifyIsLoggedInCookie(false);
        loginPage.enterLoginDetails(userName, password);
        verifyUsernameCookie(userName);
        verifyIsLoggedInCookie(true);
        cy.url().should("include", "Welcome.html");
    });
});


