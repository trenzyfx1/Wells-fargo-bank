const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.3 });

sections.forEach(section => {
    observer.observe(section);
});

function login() {
    const correctUsername = "Mike Minihan";
    const correctPassword = "#1967$=";

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    const errorMsg = document.getElementById("error-message");

    if (username === correctUsername && password === correctPassword) {
        sessionStorage.setItem("loggedIn", "true");

        window.location.href = "homepage.html";
    } else {
        errorMsg.textContent = "Invalid login details.";
    }
}

function logout() {
    sessionStorage.removeItem("loggedIn");
    window.location.href = "index.html";
}

let year = new Date().getFullYear().toString();
document.getElementById("year").innerHTML = year;
