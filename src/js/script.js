$('.mobile-btn').on('click', function (){
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.header__menu').toggleClass('show-menu');
    $('.header__menu-link').toggleClass('show-link');
});


$('.header__menu a nav').on('click', function (){
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.header__menu').removeClass('show-menu');
    $('.header__menu-link').removeClass('show-link');
});
