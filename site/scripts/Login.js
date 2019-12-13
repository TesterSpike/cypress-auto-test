let userNameElement;
let passwordElement;

function VerifyLogin(loginForm) {
    const userName = userNameElement.value;
    const password = passwordElement.value;
    if (userName.toLowerCase() === "fake" || password.toLowerCase() === "fake") {
        setMessage("Please supply a valid user name and password");
    } else {
        document.cookie = "userName=" + userName + "; Domain=localhost; Path=/cypress-auto-test/site";
        document.cookie = "isLoggedIn=true; Domain=localhost; Path=/cypress-auto-test/site";
        loginForm.submit();
    }

}

function PageLoad() {
    userNameElement = document.getElementById("username");
    passwordElement = document.getElementById("password");

    let isUserNameEntered = userNameElement.value !== "";
    let isPasswordEntered = passwordElement.value !== "";

    function enableLogin() {
        document.getElementById("submitBtn").disabled = !(isUserNameEntered && isPasswordEntered);
    }

    userNameElement.addEventListener("input", () => {
        setMessage("");
        isUserNameEntered = userNameElement.value !== "";
        enableLogin();
    });

    passwordElement.addEventListener("input", () => {
        setMessage("");
        isPasswordEntered = passwordElement.value !== "";
        enableLogin();
    });
}

function setMessage(message) {
    document.getElementById("user_message").innerText = message;
}