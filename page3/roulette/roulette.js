//roulette
let roulette = document.querySelector('.diagramme');
let btn = document.querySelector('.turn');
let number = Math.ceil(Math.random() * 1000);

//récompense
let promo = ["30%", "10%", "15%", "20%"];
//Afficher la récompense
let cadeau = document.querySelector('.cadeau');
let show_cadeau = document.querySelector('.show_cadeau')

function tourne() {

    document.getElementById('message').innerHTML = ""
    roulette.style.transform = "rotate(" + number + "deg)";
    console.log(roulette.style)
    number += Math.ceil(Math.random() * 1000);
    //je veux qu'à chaque fois que la roue s'arrete la recompense s'affiche.
    setTimeout(function prix() {
        var rand = Math.floor(Math.random() * promo.length);
        var rValue = promo[rand];
        cadeau.classList.add('show_cadeau');
        //je dois creer une phrase qui annonce le prix et qui sera affiché dans la div cadeau
        document.getElementById('message').innerHTML = "Bravo ! vous avez gagné " + rValue + " de réduction sur votre prochain achat."
    }, 4000);

}
btn.addEventListener('click', tourne);

//Faire disparaitre ma pop-up
let croix = document.querySelector('.croix');
croix.addEventListener('click', function() {
    cadeau.classList.remove('show_cadeau');
})