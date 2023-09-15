const switchToggle = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");
const image1 = document.getElementById("image1");
const image2 = document.getElementById("image2");
const image3 = document.getElementById("image3");
const textBox = document.getElementById("text-box");
const toggleIcon = document.getElementById("toggle-icon");

function imageMode(color) {
  image1.src = `img/undraw_conceptual_idea_${color}.svg`;
  image2.src = `img/undraw_feeling_proud_${color}.svg`;
  image3.src = `img/undraw_proud_coder_${color}.svg`;
}

function isDarkMode(isDark) {
  nav.style.backgroundColor = isDark
    ? "rgb(0 0 0/ 50%)"
    : "rgb(255 255 255/ 50%)";
  textBox.style.backgroundColor = isDark
    ? "rgb(255 255 255/ 50%)"
    : "rgb(0 0 0/ 50%)";
  toggleIcon.children[0].textContent = isDark ? "Dark-Mode" : "Light-Mode";
  isDark
    ? toggleIcon.children[1].classList.replace("fa-sun", "fa-moon")
    : toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");
  isDark ? imageMode("dark") : imageMode("light");
}

// function darkmode() {
//   nav.style.backgroundColor = "rgb(0 0 0/ 50%)";
//   textBox.style.backgroundColor = "rgb(255 255 255/ 50%)";
//   toggleIcon.children[0].textContent = "Dark-Mode";
//   toggleIcon.children[1].classList.replace("fa-sun", "fa-moon");
//   imageMode("dark");
// }
// function lightmode() {
//   nav.style.backgroundColor = "rgb(255 255 255/ 50%)";
//   textBox.style.backgroundColor = "rgb(0 0 0/ 50%)";
//   toggleIcon.children[0].textContent = "Light-Mode";
//   toggleIcon.children[1].classList.replace("fa-moon", "fa-sun");

//   imageMode("light");
// }

function handleSwitch(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    isDarkMode(true);
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    isDarkMode(false);
  }
}

switchToggle.addEventListener("change", handleSwitch);

// Check for local storage.

const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    switchToggle.checked = true;
    isDarkMode(true);
  }
}
