import {welcomeLocator} from "../../../utilities/Locators";

describe("Welcome Page success", () => {
    const userName = "Bob";
    beforeEach("Cookie setup and visit site", () => {
        cy.setCookie("isLoggedIn", "true");
        cy.setCookie("userName", userName);
        cy.visit('./staticSite/Welcome.html');
    });
    it("Will welcome the user", () => {
        cy.get(welcomeLocator.welcomeMessage).should("contain", userName);
    });
});

describe("Welcome Page error", () => {
    it("Will display error if not signed in", () => {
        cy.visit('./staticSite/Welcome.html');
        cy.get("#user_message").should("contain", "You need to be signed in to access this site.");
    });

    it("Will display error if no user details", () => {
        cy.setCookie("isLoggedIn", "true");
        cy.visit('./staticSite/Welcome.html');
        cy.get("#user_message").should("contain", "There has been a problem with your login, please retry.")
    });
});
