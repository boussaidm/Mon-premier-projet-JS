//Afficher la pop-up
var div = document.querySelector('.vide');
var panier = document.getElementById('panier');
//console.log(div)

function affichage() {
    div.classList.toggle('afficher');


}

panier.addEventListener('click', affichage);

//mettre dans le panier

var test = document.querySelector('.afficher')
var un = document.querySelector('.un');
var bouton = document.querySelectorAll('.achat');

//console.log(test);
// console.log(bouton);



for (var i = 0; i < bouton.length; i++) {
    //console.log(img[i]);
    //div.innerHTML = "<img src='" + img[i] + "'>",
    bouton[i].addEventListener('click', function (e) {
        var Pnotif = document.querySelector('.Pnotif');
        //console.log(e);
        var image = e.path[2].children[0];
        //console.log(image);
        var prix = e.target.previousElementSibling.textContent;
        var produit = e.target.previousElementSibling.previousElementSibling.textContent;
        div.innerHTML += "<img src= '" + e.path[2].children[0].src + "'>" + "<br> produit : " + produit + "<br> Prix : " + prix;
        //console.log(div.children);
        for (var g = 0; g < div.children.length; g = g + 3) {
            div.children[g].style.width = 100 + 'px';
            div.children[g].style.height = 100 + 'px';
            div.children[g].style.marginRight = 10 + 'px';
            
        };
        //notification
        Pnotif.classList.add('notif');
        console.log(Pnotif.classList);
    })
}



