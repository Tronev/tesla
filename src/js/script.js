$(function () {
    $('.slider').slick({
        arrows:false,
        fade:true,
        autoplay:3000,
        dots:true,
        
    });

    $('.header-btn').on('click', function (){
        $('.menu').addClass('active');
    });
    
    $('.close-btn').on('click', function (){
        $('.menu').removeClass('active');
    });
    
    // модальные окна

    $('[data-modal=consultation]').on('click',function(){
        $('.overlay, #consultation').fadeIn('slow');
    });
    $('.modal__close').on('click',function(){
        $('.overlay, #consultation, #thanks, #order').fadeOut('slow');
    });
});