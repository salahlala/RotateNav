let open = document.querySelector(".open");
let container = document.querySelector(".landing");
let close = document.querySelector(".close");
let nav = document.querySelector("nav");
let circle = document.querySelector(".circle");

open.addEventListener("click", () => {
  container.classList.add("trans");
  close.classList.add("turn");
  nav.classList.add("reset");
  circle.classList.add("rot");
});

close.addEventListener("click", () => {
  container.classList.remove("trans");
  close.classList.remove("turn");
  nav.classList.remove("reset");
  circle.classList.remove("rot");
});
