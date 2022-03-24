$(function () {
  $(".menu-button").on("click", function () {
    $(".menu").toggleClass("menu--active");
    $("body").toggleClass("overflow-hidden");
    let link = $(".menu-list__link");
    let logo = $(".logo");
    let profile = $(".profile");
    let search = $(".search");
    let cart = $(".cart");
    function click(element) {
      element.on("click", function () {
        $(".menu").removeClass("menu--active");
        $("body").removeClass("overflow-hidden");
      });
    }
    click(link);
    click(logo);
    click(profile);
    click(search);
    click(cart);
  });

  var w = $(window).width();
  if (w <= 576) {
    $(".dropdown-carret").removeClass("dropdown").addClass("dropend");
  }

  $(window).on("resize", function () {
    var win = $(this); //this = window
    if (win.width() <= 576) {
      if ($(".dropdown-carret").hasClass("dropdown")) {
        $(".dropdown-carret").removeClass("dropdown").addClass("dropend");
      }
    }
    if (win.width() > 576) {
      if (!$(".dropdown-carret").hasClass("dropdown")) {
        $(".dropdown-carret").removeClass("dropend").addClass("dropdown");
      }
    }
  });
});
