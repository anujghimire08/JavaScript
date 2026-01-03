const message = document.getElementById("message");
function checkValid() {
  const name = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const userData = [
    { name: "abc", password: "abc123" },
    { name: "xyz", password: "xyz123" },
  ];

  if (!name || !password) {
    message.textContent = "Fill Your Details";
    message.style.color = "red";
    return;
  }

  if (name && password) {
    if (password.length < 6) {
      message.textContent = "Password must be at least or more than 6";
      message.style.color = "red";
      return;
    }
  }
  const user = userData.find((u) => u.name === name && u.password === password);
  if (user) {
    message.style.color = "green";
    message.textContent = "Login Successful";
  } else {
    message.style.color = "red";
    message.textContent = "Login Unsuccessful";
  }
}
