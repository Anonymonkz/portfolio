const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");
const loginErrorMsg = document.getElementById("login-msg-error");
const username = document.getElementById("username-field");
const password = document.getElementById("password-field");
const users = [
  { username: "user", password: "1234" },
  { username: "anonymonkz", password: "00036" },
  { username: "slyckster", password: "sheeshable" },
  { username: "guerrero diff", password: "jgdiff123" },
];

function login(n) {
  n.preventDefault();
  if (
    users.some(
      (o) => username.value === o.username && password.value === o.password
    )
  ) {
    alert("Login Successful");
    location = "/pages/main-page/main.html";
  } else {
    loginErrorMsg.style.opacity = 1;

    setTimeout(() => {
      loginErrorMsg.style.opacity = 0;
    }, 2000);
  }
}

loginButton.addEventListener("click", (n) => {
  login(n);
});

username.addEventListener("keypress", (n) => {
  if (n.key === "Enter") login(n);
});

password.addEventListener("keypress", (n) => {
  if (n.key === "Enter") login(n);
});
