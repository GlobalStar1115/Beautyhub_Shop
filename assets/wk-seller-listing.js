var WkSellerList = $.noConflict(true);
(function($){
  if(WkSellerList('.wk-seller-listing-responsive').length){
    WkSellerList('.wk-seller-listing-responsive').slick({
      dots: false,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: true,
      autoplaySpeed: 5000,
      prevArrow: '<button class="slick-prev" aria-label="Previous" type="button" data-role="none"></button>',
      nextArrow: '<button class="slick-next" aria-label="Next" type="button" data-role="none"></button>',
      responsive: [
        {
          breakpoint: 1920,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1510,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: false,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
  }
    
})(WkSellerList);