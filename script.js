const header = document.querySelector("header");
const logo = document.querySelector(".logo");
const a = document.querySelectorAll("a");
const navBtn = document.querySelector("#nav-btn");
const main = document.querySelector("main");
const scard = document.querySelectorAll(".scard-p");
const ic = document.querySelector("#ic");
const ic1 = document.querySelector("#ic1");
const ic2 = document.querySelector("#ic2");
const ic3 = document.querySelector("#ic3");
const ic4 = document.querySelector("#ic4");
console.log(scard);

// Define the scroll threshold (e.g., 100 pixels)
const scrollThreshold = 100;

// Attach scroll event listener to the window
window.addEventListener("scroll", function handleScroll() {
  // const scrollPosition = window.scrollY;
  // console.log("Scroll Position:", scrollPosition);

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
    navBtn.addEventListener("mouseenter", () => {
      navBtn.style.color = "white";
    });
    navBtn.addEventListener("mouseleave", () => {
      navBtn.style.color = "black";
    });
  }
});

// Adding Swipper Js Code :--
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var sc1 = document.querySelectorAll(".sc-01");
var sc2 = document.querySelectorAll(".sc-02");
var sc3 = document.querySelectorAll(".sc-03");
var scardC = document.querySelectorAll(".scard");

// Card-1
scard[0].addEventListener("mouseenter", () => {
  sc1[0].style.transform = "perspective(1000px) rotateX(-20deg)";
  sc2[0].style.transform = "perspective(1000px) rotateX(-30deg)";
  sc3[0].style.transform = "perspective(1000px) rotateX(-40deg)";
  scardC[0].style.transform = "perspective(1000px) rotateX(-50deg)";
});

scard[0].addEventListener("mouseleave", () => {
  sc1[0].style.transform = "perspective(1000px) rotateX(0deg)";
  sc2[0].style.transform = "perspective(1000px) rotateX(0deg)";
  sc3[0].style.transform = "perspective(1000px) rotateX(0deg)";
  scardC[0].style.transform = "perspective(1000px) rotateX(0deg)";
});
// Card-2
scard[1].addEventListener("mouseenter", () => {
  sc1[1].style.transform = "perspective(1000px) rotateX(-20deg)";
  sc2[1].style.transform = "perspective(1000px) rotateX(-30deg)";
  sc3[1].style.transform = "perspective(1000px) rotateX(-40deg)";
  scardC[1].style.transform = "perspective(1000px) rotateX(-50deg)";
});

scard[1].addEventListener("mouseleave", () => {
  sc1[1].style.transform = "perspective(1000px) rotateX(0deg)";
  sc2[1].style.transform = "perspective(1000px) rotateX(0deg)";
  sc3[1].style.transform = "perspective(1000px) rotateX(0deg)";
  scardC[1].style.transform = "perspective(1000px) rotateX(0deg)";
});
// Card-3
scard[2].addEventListener("mouseenter", () => {
  sc1[2].style.transform = "perspective(1000px) rotateX(-20deg)";
  sc2[2].style.transform = "perspective(1000px) rotateX(-30deg)";
  sc3[2].style.transform = "perspective(1000px) rotateX(-40deg)";
  scardC[2].style.transform = "perspective(1000px) rotateX(-50deg)";
});

scard[2].addEventListener("mouseleave", () => {
  sc1[2].style.transform = "perspective(1000px) rotateX(0deg)";
  sc2[2].style.transform = "perspective(1000px) rotateX(0deg)";
  sc3[2].style.transform = "perspective(1000px) rotateX(0deg)";
  scardC[2].style.transform = "perspective(1000px) rotateX(0deg)";
});
// Card-4
scard[3].addEventListener("mouseenter", () => {
  sc1[3].style.transform = "perspective(1000px) rotateX(-20deg)";
  sc2[3].style.transform = "perspective(1000px) rotateX(-30deg)";
  sc3[3].style.transform = "perspective(1000px) rotateX(-40deg)";
  scardC[3].style.transform = "perspective(1000px) rotateX(-50deg)";
});

scard[3].addEventListener("mouseleave", () => {
  sc1[3].style.transform = "perspective(1000px) rotateX(0deg)";
  sc2[3].style.transform = "perspective(1000px) rotateX(0deg)";
  sc3[3].style.transform = "perspective(1000px) rotateX(0deg)";
  scardC[3].style.transform = "perspective(1000px) rotateX(0deg)";
});
// Card-5
scard[4].addEventListener("mouseenter", () => {
  sc1[4].style.transform = "perspective(1000px) rotateX(-20deg)";
  sc2[4].style.transform = "perspective(1000px) rotateX(-30deg)";
  sc3[4].style.transform = "perspective(1000px) rotateX(-40deg)";
  scardC[4].style.transform = "perspective(1000px) rotateX(-50deg)";
});

scard[4].addEventListener("mouseleave", () => {
  sc1[4].style.transform = "perspective(1000px) rotateX(0deg)";
  sc2[4].style.transform = "perspective(1000px) rotateX(0deg)";
  sc3[4].style.transform = "perspective(1000px) rotateX(0deg)";
  scardC[4].style.transform = "perspective(1000px) rotateX(0deg)";
});
