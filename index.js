const nav = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");
const yearEl = document.getElementById("year");
const links = Array.from(document.querySelectorAll(".nav__link"));
const sections = links
  .map((a) => document.querySelector(a.getAttribute("href")))
  .filter(Boolean);

yearEl.textContent = new Date().getFullYear();

// Mobile menu
navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.innerHTML = isOpen ? '<i class="ri-close-line"></i>' : '<i class="ri-menu-3-line"></i>';
});

// Close menu after click
links.forEach((a) => {
  a.addEventListener("click", () => {
    if (nav.classList.contains("open")) {
      nav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
      navToggle.innerHTML = '<i class="ri-menu-3-line"></i>';
    }
  });
});

// Active link on scroll
const setActive = () => {
  const y = window.scrollY + 110;
  let currentId = "home";

  for (const sec of sections) {
    if (sec.offsetTop <= y) currentId = sec.id;
  }

  links.forEach((a) => {
    const id = a.getAttribute("href").replace("#", "");
    a.classList.toggle("active", id === currentId);
  });
};

window.addEventListener("scroll", setActive, { passive: true });
window.addEventListener("load", setActive);

// Reveal on scroll (animations)
const revealEls = Array.from(document.querySelectorAll(".reveal"));

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("is-visible");
    });
  },
  { threshold: 0.14 }
);

revealEls.forEach((el) => io.observe(el));

// Back to top (reliable)
const backToTop = document.getElementById("backToTop");
if (backToTop) {
  backToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
