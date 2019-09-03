/*Кнопка меню*/
$('.navbar-toggler').on('click', function(e) {
 e.preventDefault();//для отмены действия при нажатии кнопки
 $(this).toggleClass('navbar-toggler_active');//находим.navbar-toggler и создаем класс navbar-toggler_active для переварачивания полосок
 
});
/*выпадающее меню в навигации*/
$('.navbar-toggler').on('click', function(){
  $('.menu').toggleClass('menu_active');
});

/*слайдер slick для блока reviews*/
$(".reviews-slider").slick({
 draggable: true, //отключаем перелистывание пальцем
 //dots: true, //отобразим точки для слайда
//dotsClass: 'slick-dots reviews-slider__dots', //присваиваем точкам наш класс или оставляеа по умолчанию slick-dots
 slidesToShow: 3, //отображеть слайдов
 slidesToScroll: 1, //перелистывать слайд
 responsive: [ //для медиа запросов
  {
    breakpoint: 768,
    settings: {
     slidesToShow: 2,
     slidesToScroll: 1,
     infinite: true,
     prevArrow: "<button type='button' class='arrow slick-prev'></button>",
     nextArrow: "<button type='button' class='arrow slick-next'></button>",
     dots: true, //убираем точки
     dotsClass: 'slick-dots reviews-slider__dots', //присваиваем точкам наш класс или оставляеа по умолчанию slick-dots
    }
  },
  {
    breakpoint: 576,
    settings: {
     slidesToShow: 1,
     slidesToScroll: 1,
     infinite: true,
     prevArrow: "<button type='button' class='arrow slick-prev'></button>",
     nextArrow: "<button type='button' class='arrow slick-next'></button>",
     dots: true, //убираем точки
     dotsClass: 'slick-dots reviews-slider__dots', //присваиваем точкам наш класс или оставляеа по умолчанию slick-dots
    }
  },
 ]
});
