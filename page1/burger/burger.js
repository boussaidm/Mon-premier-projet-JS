//burger
const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');

function menu() {
    navbar.classList.toggle('showNav');
}

burger.addEventListener('click', menu);

var li =  document.querySelectorAll('.navbar__link')

for(var i = 0; i<li.length; i++) {
    li[i].addEventListener('click', ()=> {
        navbar.classList.toggle('showNav');
    })
}