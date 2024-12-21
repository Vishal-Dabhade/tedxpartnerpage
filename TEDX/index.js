
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav-links");
const goToTopBtn = document.getElementById("goToTopBtn");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active"); 
  hamburger.classList.toggle("open"); 
});


navLinks.addEventListener("click", (event) => {
  if (event.target.tagName === "A") {
    navLinks.classList.remove("active");
    hamburger.classList.remove("open");
  }
});


document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});


window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    goToTopBtn.style.display = "block";
  } else {
    goToTopBtn.style.display = "none"; 
  }
});


goToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});


document.querySelector(".footer p").innerHTML = `
  Copyright ©${new Date().getFullYear()} All rights reserved 
  | Made with ❤️ by TEDxNITKSurathkal & Colorlib | This independent TEDx event is operated under license from TED.
`;

console.log(
  "%cWelcome to TEDxNITKSurathkal!",
  "color: #ff0000; font-size: 16px; font-weight: bold;"
);

