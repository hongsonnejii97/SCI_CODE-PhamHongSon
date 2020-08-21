$(document).ready(function () {
  function layoutHandler() {
    if (window.innerWidth < 1025) {
      $(".mn1,.mn2,.mn3,.mn4,.mn5,.mn6,.mn7,.mn8,.mn9").click(function () {
        $(this).parent().find('.menuSubBox').toggle();
      });
    }
    if (window.innerWidth < 1025) {
      $(".LP .siteHeaderMain a").click(function () {
        $(".LP .siteHeaderMain").removeClass("active");
        $(".siteHeader-bg").removeClass("active");
      });

    }
  }
  layoutHandler();

  $(".siteHeaderNav").click(function () {
    $(".siteHeaderMain").addClass("active");
    $(".siteHeader-bg").addClass("active");
  });
  $(".siteHeader-bg").click(function () {
    $(".siteHeaderMain").removeClass("active");
    $(".siteHeader-bg").removeClass("active");
  });


  $(document).on("scroll", onScroll);
  $(".menu a, a[href='#pageReg'],header a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({
        scrollTop: $(hash).offset().top - 70
      }, 900);
      return false;
      var target = this.hash,
        menu = target;
      $target = $(target);
      $('html, body').stop().animate({
        'scrollTop': $(target).offset().top - 70
      }, 70, 'swing', function () {
        window.location.hash = target;
        $(document).on("scroll", onScroll);
      });
    }
  });

});

function onScroll(event) {
  var scrollPos = $(document).scrollTop();
  $('.menu  a').each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.position().top - 70 <= scrollPos && refElement.position().top - 50 + refElement.height() > scrollPos) {
      $('.menu  a').removeClass("active");
      currLink.addClass("active");
    } else {
      currLink.removeClass("active");
    }
  });
}



