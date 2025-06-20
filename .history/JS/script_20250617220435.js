function login() {
    const correctUsername = "Mike Minihan";
    const correctPassword = "#19";

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const errorMsg = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        // Redirect to dummy bank homepage
        window.location.href = "homepage.html";
    } else {
        errorMsg.textContent = "Invalid login details.";
    }
}
