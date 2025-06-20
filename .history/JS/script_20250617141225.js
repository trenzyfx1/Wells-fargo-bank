function login() {
  const correctUsername = "Jiora Martins";
  const correctPassword = "sususu";

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-message");

  const captchaResponse = grecaptcha.getResponse(); // Check CAPTCHA

  // CAPTCHA not checked
  if (!captchaResponse) {
    errorMsg.textContent = "Please verify you're not a robot.";
    return;
  }

  // Validate credentials
  if (username === correctUsername && password === correctPassword) {
    window.location.href = "homepage.html"; // Dummy redirect
  } else {
    errorMsg.textContent = "Invalid login details.";
  }
}
