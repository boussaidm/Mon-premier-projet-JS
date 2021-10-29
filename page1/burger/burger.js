//burger
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

function menu() {
    navbar.classList.toggle('showNav');
}

burger.addEventListener('click', menu);