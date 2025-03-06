$(document).ready(function () {
  $("#loginForm").submit(function (e) {
    e.preventDefault();
    let email = $("#email").val();
    let password = $("#password").val();

    if (email === "admin@example.com" && password === "password123") {
      alert("Login Successful!");
    } else {
      alert("Invalid Credentials");
    }
  });

  $("#signupForm").submit(function (e) {
    e.preventDefault();
    let name = $("#signupName").val();
    let email = $("#signupEmail").val();
    let password = $("#signupPassword").val();

    alert("Sign Up Successful for " + name + "!");
  });

  $("#showSignup").click(function () {
    $("#loginContainer").addClass("hidden");
    $("#signupContainer").removeClass("hidden");
  });

  $("#showLogin").click(function () {
    $("#signupContainer").addClass("hidden");
    $("#loginContainer").removeClass("hidden");
  });
});

window.fbAsyncInit = function () {
  FB.init({
    appId: "YOUR_FACEBOOK_APP_ID", // Replace with your actual Facebook App ID
    cookie: true,
    xfbml: true,
    version: "v12.0",
  });
  FB.AppEvents.logPageView();
};

(function (d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) {
    return;
  }
  js = d.createElement(s);
  js.id = id;
  js.src = "https://connect.facebook.net/en_US/sdk.js";
  fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function checkFacebookLogin() {
  FB.getLoginStatus(function (response) {
    if (response.status === "connected") {
      alert("Facebook Login Successful!");
    } else {
      FB.login(
        function (response) {
          if (response.status === "connected") {
            alert("Facebook Login Successful!");
          } else {
            alert("Facebook login failed.");
          }
        },
        { scope: "public_profile,email" }
      );
    }
  });
}

document.getElementById("fbLogin").addEventListener("click", function () {
  checkFacebookLogin();
});

function handleCredentialResponse(response) {
  console.log("Encoded JWT ID token: ", response.credential);
  alert("Google Login Successful!");
}

window.onload = function () {
  google.accounts.id.initialize({
    client_id:
      "293773847239-r0u2r64urb3flqqp42sqt83dn62brnb2.apps.googleusercontent.com",
    callback: handleCredentialResponse,
  });
  google.accounts.id.renderButton(document.querySelector(".g_id_signin"), {
    theme: "outline",
    size: "large",
  });
};
