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