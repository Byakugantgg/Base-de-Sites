const botao = document.querySelector("#menu-toggle");

const navbar = document.querySelector("#navbar");

botao.addEventListener("click", () =>
navbar.classList.toggle("active"));