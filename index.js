//when so clicks on hamburger menu BUTTON
const nav = document.querySelector(".primary-navigation");

const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {

    //if menu closed, open it NAV
    //check visibility
    const visibility = nav.getAttribute("data-visible");

    //if
    if (visibility === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false)
        navToggle.setAttribute("aria-expanded", false);
    }



    //if menu open, close it NAV

});



