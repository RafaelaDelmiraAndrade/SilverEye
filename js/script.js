$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav_item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if(scrollPosition <= 0){
            header.css('box-shadow', 'none');
        }else{
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'right', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.secao-div-img', {
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.secao-div-texto', {
        origin: 'right', 
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.mais__titulo', {
        origin: 'left', 
        duration: 2000,
        distance: '20%'
    });

});