
var livai = document.querySelector('.livai');

window.addEventListener('scroll', function() {

   
        // console.log(e);
        // console.log(window.scrollY);
        var trajetY = window.scrollY;
        livai.style.right = (trajetY*1.5)  + 'px';
        livai.style.top = (trajetY*1.3)  + 'px';


})




