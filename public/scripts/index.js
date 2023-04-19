/*
By : Diego Bryan - https://wa.me/5527999307906
*/
const themeSwitch = document.getElementById("switch");
const html = document.documentElement;
console.log(html);

const localTheme = localStorage.getItem("@Bryan0666/Theme");
console.log(localTheme);
if (localTheme) {
  if (localTheme === "dark") {
    html.classList.add("dark");
    themeSwitch.checked = true;
  } else {
    html.classList.remove("dark");
    themeSwitch.checked = false;
  }
} else {
  localStorage.setItem("@Bryan0666/Theme", "light");
}

themeSwitch.addEventListener("change", ({ target: { checked } }) => {
  if (checked) {
    html.classList.add("dark");
    localStorage.setItem("@Bryan0666/Theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("@Bryan0666/Theme", "light");
  }
});
