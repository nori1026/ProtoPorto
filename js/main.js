const navbar = document.querySelector("nav");

window.addEventListener("scroll", changeNav);

function changeNav() {
  navbar.style.opacity = "0.5";
}
