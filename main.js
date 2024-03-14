const button = document.getElementById("nav-button");
const navLink = document.getElementById("nav-link");
const arrowDown = document.getElementById("arrow-down");
const arrowUp = document.getElementById("arrow-up");

button.addEventListener("click", () => {
  let toggled = navLink.classList.toggle("hidden");
  if (toggled) {
    arrowDown.classList.remove("hidden");
    arrowUp.classList.add("hidden");
  } else {
    arrowDown.classList.add("hidden");
    arrowUp.classList.remove("hidden");
  }
});

const button2 = document.getElementById("nav-button2");
const iconDown = document.getElementById("iconDown");
const iconUp = document.getElementById("iconUp");
const navLink2 = document.getElementById("nav-link2");

button2.addEventListener("click", () => {
  let toggled = navLink2.classList.toggle("hidden");
  if (toggled) {
    iconDown.classList.remove("hidden");
    iconUp.classList.add("hidden");
  } else {
    iconDown.classList.add("hidden");
    iconUp.classList.remove("hidden");
  }
});

const button3 = document.getElementById("button3");
const iconMenu = document.getElementById("iconMenu");
const iconCloseMenu = document.getElementById("iconCloseMenu");
const sidebar = document.getElementById("sidebar-mobile");

button3.addEventListener("click", () => {
  let toggled = sidebar.classList.toggle("hidden");
  if (toggled) {
    iconCloseMenu.classList.add("hidden");
    iconMenu.classList.remove("hidden");
  } else {
    iconCloseMenu.classList.remove("hidden");
    iconMenu.classList.add("hidden");
  }
});
