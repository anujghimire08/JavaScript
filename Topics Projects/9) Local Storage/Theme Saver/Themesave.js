const toggleBtn = document.getElementById("themeToggle");

toggleBtn.addEventListener("click", () => {
  let btnTheme = document.body.classList.contains("dark") ? "light" : "dark";
  applyTheme(btnTheme);
  localStorage.setItem("theme", btnTheme);
});

function applyTheme(theme) {
  document.body.classList.remove("dark", "light");
  document.body.classList.add(theme);
  toggleBtn.textContent = theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode";
}

const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  applyTheme(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
}

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
      applyTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  });
  