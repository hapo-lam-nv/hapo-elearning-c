$(document).ready(function () {
  //show slider
  $(".hapo-wrap-slider").eq(0).css("visibility", "visible");
  // slider animation
  var index = 0;

  // automatic next slider
  function autoNext(x) {
    index++;
    var len = $(".hapo-wrap-slider").length;
    $(".hapo-wrap-slider").css("visibility", "hidden");
    $(".hapo-wrap-slider").css("animation-name", "");
    index = index % len;
    $($(".hapo-wrap-slider")[index]).css("visibility", "visible");
    $($(".hapo-wrap-slider")[index]).css("animation-name", "slideShow");
  }

  // pause slider
  var pause = () => {
    clearInterval(myTimer);
  };

  // resume slider
  var resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(autoNext, 3000, index);
  };

  $(".hapo-wrap-slider, .hapo-left-right").mouseenter(pause);
  $(".hapo-wrap-slider, .hapo-left-right").mouseleave(resume);

  function show(n) {
    var slider_len = $(".hapo-wrap-slider").length;
    $(".hapo-wrap-slider").css("visibility", "hidden");
    $(".hapo-wrap-slider").css("animation-name", "");
    if (n < 0) {
      index = slider_len - 1;
    }
    if (n >= slider_len) {
      index = 0;
    }
    $(".hapo-wrap-slider").eq(index).css("visibility", "visible");
    $(".hapo-wrap-slider").eq(index).css("animation-name", "slideShow");
  }

  function flusSlider(n) {
    clearInterval(myTimer);
    show((index += n));
  }

  var myTimer = setInterval(autoNext, 4000, index);

  $(".right_icon").click(function () {
    clearInterval(myTimer);
    flusSlider(1);
    myTimer = setInterval(autoNext, 4000, index);
  });

  $(".left_icon").click(function () {
    clearInterval(myTimer);
    flusSlider(-1);
    myTimer = setInterval(autoNext, 4000, index);
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

  // remove line-wrap
  $(window).resize(function () {
    var width = $(window).width();
    if (width <= 425) {
      $(".line-wrap").remove();
      $(".hapo-feedback-det").addClass("container");
    }
  });

  // show tooltip
  $('[data-toggle="tooltip"]').tooltip();
});
