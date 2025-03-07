document.addEventListener("DOMContentLoaded", function () {
  const loginContainer = document.getElementById("loginContainer");
  const signupContainer = document.getElementById("signupContainer");
  const showSignup = document.getElementById("showSignup");
  const showLogin = document.getElementById("showLogin");
  const githubLogin = document.getElementById("githubLogin");
  const loginButton = document.getElementById("loginButton");
  const googleReset = document.getElementById("googleReset");
  const githubReset = document.getElementById("githubReset");

  if (showSignup) {
    showSignup.addEventListener("click", function (event) {
      event.preventDefault();
      loginContainer.classList.add("hidden");
      signupContainer.classList.remove("hidden");
    });
  }

  if (showLogin) {
    showLogin.addEventListener("click", function (event) {
      event.preventDefault();
      signupContainer.classList.add("hidden");
      loginContainer.classList.remove("hidden");
    });
  }

  if (githubLogin) {
    githubLogin.addEventListener("click", function () {
      window.location.href =
        "https://github.com/login/oauth/authorize?client_id=YOUR_GITHUB_CLIENT_ID";
    });
  }

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      let username = document.getElementById("username").value;
      let password = document.getElementById("password").value;

      if (username && password) {
        alert("Login successful!");
        // Add authentication logic here
      } else {
        alert("Please enter both username and password.");
      }
    });
  }

  window.handleCredentialResponse = function (response) {
    console.log("Google login response:", response);
  };

  if (googleReset) {
    googleReset.addEventListener("click", function () {
      alert("Google password reset not implemented yet.");
    });
  }

  if (githubReset) {
    githubReset.addEventListener("click", function () {
      alert("GitHub password reset not implemented yet.");
    });
  }
});
