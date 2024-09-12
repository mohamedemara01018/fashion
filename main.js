const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header-image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-btns", {
  ...scrollRevealOption,
  delay: 1500,
});

const banner = document.querySelector(".banner-container");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
  const duplicateNode = item.cloneNode(true);
  duplicateNode.setAttribute("aria-hidden", true);
  banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".arrival-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".sale-image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".sale-content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".sale-content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale-content h4", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".sale-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".favourite-card", {
  ...scrollRevealOption,
  interval: 500,
});
