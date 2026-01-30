// Typing Effect
const roles = ["Data Engineer", "ML Enthusiast", "Analytics Expert"];
let i = 0, j = 0, currentRole = [], isDeleting = false, speed = 150;
function type() {
  const typingElement = document.getElementById("typing");
  if (i >= roles.length) i = 0;
  let fullText = roles[i];
  if (!isDeleting) {
    currentRole.push(fullText[j]);
    typingElement.textContent = currentRole.join("");
    j++;
    if (j === fullText.length) { isDeleting = true; setTimeout(type, 1000); return; }
  } else {
    currentRole.pop();
    typingElement.textContent = currentRole.join("");
    if (currentRole.length === 0) { isDeleting = false; j = 0; i++; }
  }
  setTimeout(type, isDeleting ? speed / 2 : speed);
}
document.addEventListener("DOMContentLoaded", type);

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Smooth scroll nav
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.getElementById(link.getAttribute('href').slice(1));
    target.scrollIntoView({behavior: 'smooth'});
  });
});

// Load Projects
const projectContainer = document.getElementById("projectCards");
projects.forEach(project => {
  const card = document.createElement("div");
  card.classList.add("flip-card");
  card.innerHTML = `
    <div class="flip-card-inner">
      <div class="flip-card-front">
        <h3>${project.title}</h3>
        <span>${project.date}</span>
      </div>
      <div class="flip-card-back">
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank">View Project</a>
      </div>
    </div>
  `;
  projectContainer.appendChild(card);
});

// Load Skills
const skillsGrid = document.getElementById("skillsGrid");
skills.forEach(skill => {
  const skillDiv = document.createElement("div");
  skillDiv.classList.add("skill-bar");
  skillDiv.innerHTML = `
    <span class="skill-name">${skill.name}</span>
    <div class="bar-bg"><div class="bar-fill" style="width:0%"></div></div>
  `;
  skillsGrid.appendChild(skillDiv);
  setTimeout(() => { skillDiv.querySelector(".bar-fill").style.width = skill.level + "%"; }, 200);
});

// Scroll Animations
const faders = document.querySelectorAll("section, .card, .skill-bar");
const appearOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.classList.add("appear");
    observer.unobserve(entry.target);
  });
}, appearOptions);
faders.forEach(fader => { fader.classList.add("fade"); appearOnScroll.observe(fader); });
