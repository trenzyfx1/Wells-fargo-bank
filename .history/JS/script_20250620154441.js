function login() {
    const correctUsername = "Mike Minihan";
    const correctPassword = "#1967$=";

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const errorMsg = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        // ✅ Set session key to track login
        sessionStorage.setItem("loggedIn", "true");

        // Redirect to homepage
        window.location.href = "homepage.html";
    } else {
        errorMsg.textContent = "Invalid login details.";
    }
}
