// Smooth scrolling to the corresponding section
document.addEventListener("DOMContentLoaded", function () {
  const headerLinks = document.querySelectorAll(".header-links a");
  for (const link of headerLinks) {
    link.addEventListener("click", scrollToSection);
  }
});

function scrollToSection(event) {
  event.preventDefault();
  const target = event.target.getAttribute("href");
  const section = document.querySelector(target);
  section.scrollIntoView({ behavior: "smooth" });
}
