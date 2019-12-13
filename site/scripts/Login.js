let userNameElement;
let passwordElement;

function VerifyLogin(loginForm) {
    const userName = userNameElement.value;
    const password = passwordElement.value;
    if (userName.toLowerCase() === "fake" || password.toLowerCase() === "fake") {
        document.getElementById("user_message").innerText = "Please supply a valid user name and password";
    } else {
        document.cookie = "userName=" + userName;
        document.cookie = "isLoggedIn=true;";
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
        isUserNameEntered = userNameElement.value !== "";
        enableLogin();
    });

    passwordElement.addEventListener("input", () => {
        isPasswordEntered = passwordElement.value !== "";
        enableLogin();
    });
}