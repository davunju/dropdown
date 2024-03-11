const button = document.querySelector("#nav-button");
const button2 = document.querySelector("#nav-button2");

const navLink = document.querySelector("#nav-link");
const navLink2 = document.querySelector("#nav-link2");

const arrowDown = document.querySelector("#arrow-down");
const arrowUp = document.querySelector("#arrow-up");

const iconUp = document.querySelector("#iconUp");
const iconDown = document.querySelector("#iconDown");

button.addEventListener("click", (e) => {
  let toggled;
  toggled = navLink.classList.toggle("hidden");
  if (toggled) {
    arrowDown.classList.remove("hidden");
    arrowUp.classList.add("hidden");
  } else {
    arrowDown.classList.add("hidden");
    arrowUp.classList.remove("hidden");
  }
});

button2.addEventListener("click", (e) => {
  let toggled;
  toggled = navLink2.classList.toggle("hidden");
  if (toggled) {
    iconDown.classList.remove("hidden");
    iconUp.classList.add("hidden");
  } else {
    iconDown.classList.add("hidden");
    iconUp.classList.remove("hidden");
  }
});
