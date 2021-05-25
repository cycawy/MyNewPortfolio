const hamBtn = document.querySelector("#hamburger");
const navmobile = document.querySelector(".nav-mobile");
const li = document.querySelector(".nav-list");

const closeNav = (e) => {
  if (!navmobile.contains(e.target) && e.target !== hamBtn) {
    navmobile.classList.remove("show-nav");
    window.removeEventListener("click", closeNav);
  }

};

hamBtn.addEventListener("click", () => {
  navmobile.classList.toggle("show-nav");
  window.addEventListener("click", closeNav);
});
