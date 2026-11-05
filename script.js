
const themeToggle = document.getElementById("theme-toggle");

function updateThemeButton(isDark) {
    themeToggle.textContent = isDark ? "Light mode" : "Dark mode";
    themeToggle.setAttribute("aria-pressed", String(isDark));
}

const savedTheme = localStorage.getItem("portfolio-theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

updateThemeButton(document.body.classList.contains("dark-mode"));

themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");

    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");

    updateThemeButton(isDark);
});
