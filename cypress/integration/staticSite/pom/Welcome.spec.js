import {WelcomePage} from "../../../pom/WelcomePage";

const welcomePage = new WelcomePage();
const userName = "Bob";

describe("Welcome Page success (POM)", () => {
    it("Will welcome the user", () => {
        welcomePage.navigateWithCookies(userName, true);
        welcomePage.verifyUserIsWelcomed(userName);
    });
});

describe("Welcome Page error (POM)", () => {
    it("Will display error if not signed in", () => {
        welcomePage.navigate();
        welcomePage.verifyErrorMessage("You need to be signed in to access this site.")
    });

    it("Will display error if no user details", () => {
        welcomePage.navigateWithCookies("", true);
        welcomePage.verifyErrorMessage("There has been a problem with your login, please retry.");
    });
});
