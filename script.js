//Ajout de la couleur de la nav bar si l'écran est inférieur à 375px
let click = false;
$(document).ready(function(){
    if(window.innerWidth <= 375){

        $('.navbar-toggler').on('click', function () {
            if(click){
                $('#navbar').removeClass('bg-dark');
                click = false;
            }else{
                $('#navbar').addClass('bg-dark');
                click = true;
            }

        })
        $('.fa-twitter').removeClass('fa-3x');
        $('.fa-facebook-official').removeClass('fa-3x');
        $('.fa-instagram').removeClass('fa-3x');
        $('.fa-github').removeClass('fa-3x');
        $('.fa-twitter').addClass('fa-2x');
        $('.fa-facebook-official').addClass('fa-2x');
        $('.fa-instagram').addClass('fa-2x');
        $('.fa-github').addClass('fa-2x');
    }
})

//Validation du formulaire
let form_validation = true;

$(document).ready(() => {
    var form_control = document.getElementsByClassName('form-control');
    var pattern = new RegExp(/[^<->]/);
    for (let i = 0; i < form_control.length; i++) {
        const element = form_control[i];
        element.addEventListener('change', (event) => {
            if(!pattern.test(event.target.value)){
                form_validation = false;
                element.setCustomValidity("Veuillez ne pas saisir de script")
            }
        })
    }

})

$('#form').on('click', () => {
    if(!form_validation){
        console.log("Impossible de lancer");
    }
})

//Recherche de section lors du scroll
$( document ).ready(function() {
    $(window).scroll(function() {
        var Scroll = $(window).scrollTop() + 1;
        var SectionWhere = $('#textAnimation').offset().top;

        if (Scroll >= SectionWhere) { 
            AOS.init();
        } 
    });
});
