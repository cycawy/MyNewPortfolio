const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector("#hamburger");

const navbarHam = document.querySelector(".nav-ul");
const navItems = document.querySelectorAll('.nav-item')
const navLogo = document.querySelector('.nav-logo')
const navItemsMobile = document.querySelectorAll(".nav-item-mobile");
const navHamItems = document.querySelectorAll(".nav-ham-item");
const scrollSection = document.querySelectorAll(".scroll");
const projects = document.querySelectorAll(".project");
const viewProjects = document.querySelector(".view-projects");

const facebook = document.querySelector(".fa-facebook");
const github = document.querySelector(".fa-github");
const linkedin = document.querySelector(".fa-linkedin");

// global variable defining if hamburger menu is on
let hamburgerOn;

// toggle showing of hamburger menu
const toggleHamburger = () => {
  navbarHam.classList.toggle("show-hamNav");
  hamburgerOn = true;
};

viewProjects.addEventListener("click", () => {
  
  window.scrollTo({
    top: scrollSection[2].offsetTop-60,
    behavior: "smooth",
  });
});

navLogo.addEventListener('click', ()=>{
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

// Adding scroll animation to navbar elements
const addScrollAnimation = (el) => {
  el.forEach((e, index) => {
    // console.log("hit1", e, index);

    e.addEventListener("click", (e) => {
      // console.log('clicked', index);
      if(navmobile.classList.contains('show-nav')){
        navmobile.classList.remove("show-nav");
        window.removeEventListener("click", closeNav);
      }
      e.preventDefault();
      // console.log(scrollSection[index]);
       let top = scrollSection[index].offsetTop - 60;
     
     
      if (hamburgerOn) {
        navbarHam.classList.toggle("show-hamNav");
      }
      // Using scrollTo method to scroll top with smooth effect
      window.scrollTo({
        top: top,
        behavior: "smooth",
      });
    });
  });
};

// scroll animation on default navbar
 addScrollAnimation(navItems);
// scroll animation on hamburger navbar
 addScrollAnimation(navItemsMobile);

hamburger.addEventListener("click", toggleHamburger);

projects.forEach((el) => {
  el.addEventListener("mouseover", (e) => {
    e.target.style.transition = "all 2s";
  });
});

AOS.init();

