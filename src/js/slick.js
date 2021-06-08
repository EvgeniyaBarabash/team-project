$('.reviews__slider').slick({
    asNavFor: '.reviews__slider-two',
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          asNavFor: '.reviews__slider-two',
          arrows: false,
          dots: true,
          autoplay: false,
          autoplaySpeed: 3000,
          speed: 1000,
          infinite: true,
          fade: true,
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 768,
        settings: {
          asNavFor: '.reviews__slider-two',
          arrows: false,
          dots: true,
          autoplay: false,
          autoplaySpeed: 3000,
          speed: 1000,
          infinite: true,
          fade: true, 
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 320,
        settings: {
          asNavFor: '.reviews__slider-two',
          arrows: false,
          dots: true,
          autoplay: false,
          autoplaySpeed: 3000,
          speed: 1000,
          infinite: true,
          fade: true,
          cssEase: 'linear'
        }
      }
    ]
});

  $('.reviews__slider-two').slick({
    asNavFor: '.reviews__slider',
    arrows: false,
    dots: true,
    autoplay: false,
    autoplaySpeed: 3000,
    speed: 1000,
    infinite: true,
    fade: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          asNavFor: '.reviews__slider',
          arrows: false,
          dots: true,
          autoplay: false,
          autoplaySpeed: 3000,
          speed: 1000,
          infinite: true,
          fade: true,
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 768,
        settings: {
          asNavFor: '.reviews__slider',
          arrows: false,
          dots: true,
          autoplay: false,
          autoplaySpeed: 3000,
          speed: 1000,
          infinite: true,
          fade: true,
          cssEase: 'linear'
        }
      },
      {
        breakpoint: 320,
        settings: {
          asNavFor: '.reviews__slider',
          arrows: false,
          dots: true,
          autoplay: false,
          autoplaySpeed: 3000,
          speed: 1000,
          infinite: true,
          fade: true,
          cssEase: 'linear'
        }
      }
    ]
  });