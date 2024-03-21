const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const a = document.querySelectorAll("a");
const navBtn = document.querySelector("#nav-btn");

// Define the scroll threshold (e.g., 100 pixels)
const scrollThreshold = 100;

// Attach scroll event listener to the window
window.addEventListener("scroll", function handleScroll() {
  const scrollY = window.scrollY || window.pageYOffset;
  if (scrollY > scrollThreshold) {
    header.style.backgroundColor = "black";
    logo.style.color = "white";
    a.forEach((a) => {
      a.style.color = "white";
    });
    navBtn.style.border = "1px solid white";
    navBtn.style.color = "white";
  } else {
    header.style.backgroundColor = "transparent";
    logo.style.color = "black";
    a.forEach((a) => {
      a.style.color = "black";
    });
    navBtn.style.border = "1px solid black";
    navBtn.style.color = "black";
  }
});
