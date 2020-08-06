$(document).ready(function () {
  $(".responsive").slick({
    infinite: true,
    speed: 300,
    autoplay: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: ".left_icon",
    nextArrow: ".right_icon",
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  });

  // show close message
  $(".hapo-wrap-icon").click(function () {
    $(".hapo-wrap-content-mes").toggle();
  });

  $(".hapo-close").click(function () {
    $(".hapo-wrap-content-mes").hide();
  });

  // show icon close
  $(".navbar-toggler").click(function () {
    $(".navbar-toggler span").toggleClass("fa fa-times");
    $(".navbar-toggler span").toggleClass("navbar-toggler-icon");
  });

  // show tooltip
  $('[data-toggle="tooltip"]').tooltip();
});
