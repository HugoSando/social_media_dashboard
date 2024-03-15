const lightRadio = document.getElementById("light");
const darkRadio = document.getElementById("dark");

const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

const currentTheme = localStorage.getItem("theme");
if (currentTheme === "dark") {
  document.body.classList.toggle("dark-theme");
  darkRadio.checked = true;
} else if (currentTheme === "light") {
  document.body.classList.toggle("light-theme");
  lightRadio.checked = true;
}

lightRadio.addEventListener("change", function () {
  document.body.classList.remove("dark-theme");
  document.body.classList.add("light-theme");
  localStorage.setItem("theme", "light");
});

darkRadio.addEventListener("change", function () {
  document.body.classList.remove("light-theme");
  document.body.classList.add("dark-theme");
  localStorage.setItem("theme", "dark");
});
