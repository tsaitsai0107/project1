$(document).ready(function () {

  $(document).scroll(function (e) {
    if ($(this).scrollTop() > 10) {
      $('.nav').addClass('scrolled');
    }
    else {
      $('.nav').removeClass('scrolled');
    }
  });

  $(function () {
    $(document).scroll(function () {
      if ($(this).scrollTop() > 10) {
        $('.navbar img').attr('src', 'http://droitthemes.com/html/saasland/img/logo.png');
      }
      if ($(this).scrollTop() < 10) {
        $('.navbar img').attr('src', 'http://droitthemes.com/html/saasland/img/logo2.png');
      }
    })
  });

});


