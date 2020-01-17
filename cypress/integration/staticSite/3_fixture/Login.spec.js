import {LoginPage} from "../../../pom/LoginPage";
import {verifyIsLoggedInCookie, verifyUsernameCookie} from "../../../pom/CookiePage";

const loginPage = new LoginPage();


describe("Error scenarios (Fixture)", () => {
    beforeEach(() => {
        loginPage.navigate();
        loginPage.clearForm();
    });

    it("Invalid credentials", () => {
        cy.fixture("users.json").then((users) => {
            const fakeUser = users.fake;
            const user = users.test;
            loginPage.enterLoginDetails(fakeUser.username, user.password);
            loginPage.verifyErrorMessage("valid user name and password");
            loginPage.clearUsername();
            loginPage.verifyErrorMessage("");
            loginPage.enterLoginDetails(user.username, fakeUser.password);
            loginPage.verifyErrorMessage("valid user name and password");
        });
    });

    it("Missing credentials", () => {
        //Login button is only enabled if both user name and password are entered
        cy.fixture("users.json").then((users) => {
            const user = users.test;
            loginPage.verifyLoginElementStates(false);
            loginPage.enterUsername(user.username);
            loginPage.verifyLoginElementStates(false);
            loginPage.enterPassword(user.password);
            loginPage.verifyLoginElementStates(true);
            loginPage.clearUsername();
            loginPage.verifyLoginElementStates(false);
        });
    });
});

describe("Forgotten password (Fixture)", () => {
    it("forgotten", () => {
        //modal popup with email input and 'ok' - cypress does not handle this scenario
        cy.log("Test not yet defined");
    });
});

describe("User can login successfully (Fixture)", () => {
    before(() => {
        loginPage.navigate();
    });

    it("User with valid credentials will be logged in", () => {
        cy.fixture("users.json").then((users) => {
            const test = users.test;
            verifyIsLoggedInCookie(false);
            loginPage.enterLoginDetails(test.username, test.password);
            verifyUsernameCookie(test.username);
            verifyIsLoggedInCookie(true);
            cy.url().should("include", "Welcome.html");
        });
    });
});


