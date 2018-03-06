$( document ).ready(function(){
    // materialize plugins
    $(".button-collapse").sideNav();
    $(".modal").modal();
    $('select').material_select();
    $(".scrollspy").scrollSpy();
    $('.slider').slider();
    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 10, // Creates a dropdown of 10 years to control year,
        today: 'Hoje',
        clear: 'Limpe',
        close: 'Ok',
        closeOnSelect: false // Close upon selecting a date,
    });
    $('select').material_select();
    var $container = $('#masonry-grid');
    // initialize
    $container.masonry({
      columnWidth: '.col',
      itemSelector: '.col',
    });
});