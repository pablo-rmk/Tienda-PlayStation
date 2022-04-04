$(function () {

    //Cambia color de Juegos Nuevos y Juegos Clásicos al hacer Doble Click

    $('#juegosNuevos, #juegosClasicos').on('dblclick', function () {
        $(this).css({
            'color': 'red'
        });
    });

    //Cambia el tiempo de transicion al presionar el boton y volver al nav

    $("#irArriba").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 500, function () {
                window.location.hash = hash;
            });
        };
    });

    //Popover en imagenes al pasar el cursor sobre la imagen

    /*  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
     var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
         return new bootstrap.Popover(hover)
     });
  */
    //Popover en imagenes al hacer click

    var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new bootstrap.Popover(popoverTriggerEl)
    });

    /*  $(document).ready(function () {
         $('[data-toggle="popover"]').popover();
     }); */

    //tooltip

    var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
    var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
        return new bootstrap.Tooltip(tooltipTriggerEl)
    });

    //Modal

    var myModal = document.getElementById('myModal')
    var myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
        myInput.focus()
    });



});

