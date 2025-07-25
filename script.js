// Sticky Header
const header = document.querySelector("header");
const heroSection = document.getElementById("hero-section");

window.addEventListener("scroll", () => {
    const header = document.querySelector("header");
    const headerHeight = header.offsetHeight;
    
    window.addEventListener("scroll", () => {
      if (window.scrollY >= headerHeight) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });    
});

// Contact Us Button
function contactUs() {
  alert("Contact form coming soon!");
}
window.contactUs = contactUs; // Make it available globally

// Sidebar Toggle
const menuToggle = document.getElementById("menu-toggle");
const sidebar = document.getElementById("sidebar");
const closeBtn = document.getElementById("close-btn");

menuToggle.addEventListener("click", () => {
  sidebar.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  sidebar.classList.remove("open");
});

// Smooth Scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - header.offsetHeight,
        behavior: "smooth",
      });
    }
    sidebar.classList.remove("open"); // Close sidebar on click (mobile)
  });
});