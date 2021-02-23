$(document).ready(function () {
  $(document).scroll(function (e) {
    if ($(this).scrollTop() > 10) {
      $(".nav").addClass("scrolled");
      $(".nav-link").addClass("scrolled");
      $(".navbar img").attr(
        "src",
        "http://droitthemes.com/html/saasland/img/logo.png"
      );
    }

    if ($(this).scrollTop() < 10) {
      $(".nav").removeClass("scrolled");
      $(".nav-link").removeClass("scrolled");
      $(".navbar img").attr(
        "src",
        "http://droitthemes.com/html/saasland/img/logo2.png"
      );
    }
  });
});
