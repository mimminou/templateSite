const logo = document.querySelector(".Navbar_logo_container");

const heatCard = document.getElementById('heatCard');
const coldCard = document.getElementById('coldCard');
const acCard = document.getElementById('acCard');
const installCard = document.getElementById('installCard');


const cards = [heatCard,coldCard,acCard,installCard] ;

logo.addEventListener("click", function(){
    window.location.href="./";
});


for(let i=0; i<cards.length; i++){
    cards[i].addEventListener("click", function(){
        window.location.href="./services/#" + cards[i].dataset.section;
    });
}