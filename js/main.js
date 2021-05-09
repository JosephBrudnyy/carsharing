$(function(){

    $('.top__slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        fade: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                dots: false
              }
            }
          ]
    });

    $('.reviews__slider').slick({
        arrows: false,
        dots: true,
        slidesToScroll: 1,
        slidesToShow: 4,
        responsive: [
          {
            breakpoint: 1140,
            settings: {
              slidesToShow: 3
            }
          },

          {
            breakpoint: 846,
            settings: {
              slidesToShow: 2
            }
          },

          {
            breakpoint: 586,
            settings: {
              slidesToShow: 1
            }
          }
        ]
    });

    $('.menu__btn').on('click', function(){
        $('.menu__list').toggleClass('menu__list--active');
    });

});