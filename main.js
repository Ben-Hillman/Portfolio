// mobile menu
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


// set value of checkbox when clicked
const storeCheckboxStatus = () => {
  let checkbox = document.querySelector(".color-switch");
  localStorage.setItem("checkbox", checkbox.checked);
}

document.addEventListener("DOMContentLoaded", () => {
  // select checkbox element on page load
  let checkbox = document.querySelector(".color-switch");

  // check if checkbox status is stored in local storage
  if (localStorage.getItem("checkbox")) {
    checkbox.checked = JSON.parse(localStorage.getItem("checkbox"));
  }

  // add event listener to store checkbox status on click
  checkbox.addEventListener("click", storeCheckboxStatus);

  // on scroll observer
  const hiddenText = document.querySelectorAll(".text-hidden");

  const textObserver = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
      if(element.isIntersecting) {
        element.target.classList.add("text-visible");
      }
    });
  });

  hiddenText.forEach((element) => textObserver.observe(element));

  // grab all skillbars with the class of on-scroll-hidden
  const hiddenSkillbars = document.querySelectorAll(".skillbar-hidden");

  // create an observer, adding class skillbar-visible to the element when it is visible
  const skillbarObserver = new IntersectionObserver((elements) => {
    elements.forEach((element) => {
      if(element.isIntersecting) {
        element.target.classList.add("skillbar-visible");
      }
    });
  });

  // pass each hidden skillbar to the observer
  hiddenSkillbars.forEach((element) => skillbarObserver.observe(element));
});