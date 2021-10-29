//carousel
const video = document.querySelectorAll('iframe');
const nbSlide = video.length;
const suivant = document.querySelector('.droit');
const precedent = document.querySelector('.gauche');
let count = 0;

function slideSuivant() {
    video[count].classList.remove('active');

    if (count < nbSlide - 1) {
        count++;
    } else {
        count = 0;
    }
    video[count].classList.add('active');
}
suivant.addEventListener('click', slideSuivant);

function slidePrecedent() {
    video[count].classList.remove('active');

    if (count > 0) {
        count--;
    } else {
        //je retourne au debut quand je met precedent au premier.
        count = nbSlide - 1;
    }
    video[count].classList.add('active')
}
precedent.addEventListener('click', slidePrecedent);