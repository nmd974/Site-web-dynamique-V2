//Ajout de la couleur de la nav bar si l'écran est inférieur à 375px
$(document).ready(function(){
    if(window.innerWidth <= 375){
    $('#navbar').addClass('bg-dark');
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
        var SectionWhere = $('#presentation').offset().top;

        if (Scroll >= SectionWhere) { 
            // $('#contentQui').addClass('slide-top')
            // AOS.init();
        } 
    });
});
