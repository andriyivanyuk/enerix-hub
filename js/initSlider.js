document.addEventListener("DOMContentLoaded", function () {
  function initModalSlider(modal) {
    var $slider = $(modal).find(".product-slider");
    if (!$slider.length) return;

    if ($slider.hasClass("slick-initialized")) {
      $slider.slick("setPosition");
      return;
    }

    $slider.slick({
      dots: true,
      arrows: true,
      infinite: false,
      adaptiveHeight: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow:
        '<button type="button" class="slick-prev custom-prev"><i class="fas fa-chevron-left"></i></button>',
      nextArrow:
        '<button type="button" class="slick-next custom-next"><i class="fas fa-chevron-right"></i></button>',
    });

    setTimeout(function () {
      $slider.slick("setPosition");
    }, 0);
  }

  $(".portfolio-modal").on("shown.bs.modal", function () {
    initModalSlider(this);
  });

  $(".portfolio-modal").on("hidden.bs.modal", function () {
    var $slider = $(this).find(".product-slider");
    if ($slider.hasClass("slick-initialized")) {
      $slider.slick("unslick");
    }
  });
});
