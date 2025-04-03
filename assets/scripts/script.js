const toggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('active');
    toggle.classList.toggle('open');
});

// (opcional) transformar hambúrguer em "X"
const spans = toggle.querySelectorAll("span");

toggle.classList.toggle("open");

toggle.addEventListener("click", () => {
    spans[0].classList.toggle("rotate-down");
    spans[1].classList.toggle("fade-out");
    spans[2].classList.toggle("rotate-up");
});