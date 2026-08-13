const toggle = document.getElementById("theme-toggle");

// Detect system preference
const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

// Load saved theme OR fallback to system theme
let savedTheme = localStorage.getItem("theme");

if (!savedTheme) {
    savedTheme = systemPrefersDark ? "dark" : "light";
    localStorage.setItem("theme", savedTheme);
}

// Apply theme before showing page
if (savedTheme === "dark") {
    document.body.classList.add("dark");
    toggle.textContent = "☀️";
} else {
    toggle.textContent = "🌙";
}

// Reveal page only after theme is applied
document.body.classList.add("theme-ready");

// Toggle theme + save preference
toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("theme", "dark");
        toggle.textContent = "☀️";
    } else {
        localStorage.setItem("theme", "light");
        toggle.textContent = "🌙";
    }
});
