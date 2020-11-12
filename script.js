//Ajout de la couleur de la nav bar si l'écran est inférieur à 375px
$(document).ready(function(){
    if(window.innerWidth <= 375){
    $('#navbar').addClass('bg-dark');
    }
})