const primaryNav = document.querySelector(".site-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");
const navLink = document.querySelectorAll(".nav-link");
const links = [];

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute('data-visible');
    console.log(visibility);
    
    if(visibility === "false") {
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else if(visibility === "true") {
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }

    for (let i = 0; i < navLink.length; i++) {
        links.push(navLink[i]);
      
        navLink[i].addEventListener("click", () => {
          primaryNav.setAttribute("data-visible", false);
          navToggle.setAttribute("aria-expanded", false);
        });
      }
});

const storeCheckboxStatus = () => {
  let checkbox = document.querySelector(".color-switch");
  localStorage.setItem("checkbox", checkbox.checked);
}

document.addEventListener("DOMContentLoaded", () => {
  let checkbox = document.querySelector(".color-switch");

  // check if checkbox status is stored in local storage
  if (localStorage.getItem("checkbox")) {
    checkbox.checked = JSON.parse(localStorage.getItem("checkbox"));
  }

  // add event listener to store checkbox status on click
  checkbox.addEventListener("click", storeCheckboxStatus);
});