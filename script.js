
// =========================================
// PORTFOLIO INTERACTIONS
// Theme preference and current year
// =========================================

const themeToggle = document.getElementById("theme-toggle");
const themeLabel = themeToggle.querySelector(".theme-label");
const themeIcon = themeToggle.querySelector(".theme-icon");

function applyTheme(theme, savePreference = true) {
  const isDark = theme === "dark";

  document.body.classList.toggle("dark-mode", isDark);

  themeLabel.textContent = isDark ? "Light mode" : "Dark mode";
  themeIcon.textContent = isDark ? "☀" : "◐";

  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.setAttribute(
    "aria-label",
    isDark ? "Switch to light mode" : "Switch to dark mode"
  );

  if (savePreference) {
    try {
      localStorage.setItem("portfolio-theme", theme);
    } catch (error) {
      console.warn("Theme preference could not be saved.", error);
    }
  }
}


// Restore the saved theme or use the system preference.

let savedTheme = null;

try {
  savedTheme = localStorage.getItem("portfolio-theme");
} catch (error) {
  console.warn("Saved theme preference could not be read.", error);
}

const preferredTheme =
  savedTheme ||
  (window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light");

applyTheme(preferredTheme, false);


// Toggle between light and dark mode.

themeToggle.addEventListener("click", function () {
  const isDark = document.body.classList.contains("dark-mode");

  applyTheme(isDark ? "light" : "dark");
});


// Keep the footer year current.

const yearElement = document.getElementById("current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
