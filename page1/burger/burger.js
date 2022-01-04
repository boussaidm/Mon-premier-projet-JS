//burger
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

function menu() {
    navbar.classList.toggle('showNav');
}

burger.addEventListener('click', menu);

var li = document.querySelectorAll('.navbar__link')
var showNav = document.querySelector('.showNav')
for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', () => {
        navbar.classList.remove('showNav');
    })
}