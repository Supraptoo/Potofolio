// Sticky header on scroll
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// Smooth scroll sections
const sections = document.querySelectorAll("section");

const revealSection = () => {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    
    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("visible");
    }
  });
};

// Burger menu toggle
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Trigger reveal on scroll and also on initial load
window.addEventListener("scroll", revealSection);
revealSection();