(function($) {
  "use strict";

  $(window).load(function() {
    $("#page-loader")
      .delay(300)
      .fadeOut(400, function() {});

    $("#loader-name").addClass("lfa-downloadoader-left");
    $("#loader-job").addClass("loader-right");
    $("#loader-animation").addClass("loader-hide");
  });

  $(document).ready(function() {
    $("#loading-wraper").fadeIn(300);

    $("#testimonial-carousel").owlCarousel({
      navigation: false,
      slideSpeed: 300,
      paginationSpeed: 400,
      responsiveRefreshRate: 200,
      responsiveBaseWidth: window,
      pagination: true,
      singleItem: true,
      navigationText: [
        "<span class='fa fa-chevron-left'></span>",
        "<span class='fa fa-chevron-right'></span>"
      ]
    });

    $(".map").on("click", function() {
      $(".map-overlay").hide();
    });

    $(".map").on("mouseleave", function() {
      $(".map-overlay").show();
    });

    $("a.nivobox").nivoLightbox({ effect: "fade" });

    $(".section-body").perfectScrollbar({
      wheelSpeed: 0.9
    });

    let linkHome = 0;
    let linkPage = "";

    function pageOn() {
      $("#main-menu").addClass("main-menu-pgactive");
      $("#section-home").addClass("section-body-pgactive");
      $(".profileActive").removeClass("profileActive");
      $("#profile2").addClass("profileActive");

      linkHome = 1;
    }

    function pageOff() {
      $(".section-page-active").removeClass("section-page-active");
      $("#main-menu").removeClass("main-menu-pgactive");
      $("#section-home").removeClass("section-body-pgactive");
      $(".profileActive").removeClass("profileActive");
      $("#profile1").addClass("profileActive");
      linkHome = 0;
    }

    $(".link-page").on("click", function(event) {
      event.preventDefault();
      $(".menuActive").removeClass("menuActive");
      $(this).addClass("menuActive");
      linkPage = $(this).attr("href");
      $(".section-page-active").removeClass("section-page-active");
      $(linkPage).addClass("section-page-active");
      pageOn();
    });

    $(".link-home").on("click", function(event) {
      event.preventDefault();

      if (linkHome == 0) {
        //pageOn();
      } else if (linkHome == 1) {
        $(".menuActive").removeClass("menuActive");
        $(this).addClass("menuActive");
        pageOff();
      }
    });

    $(".modal-wrap").click(function() {
      $(".modal-wrap").fadeOut(300);
    });

    $(".download_resume").on("click", function(event) {
      event.preventDefault();
      alert(
        "Sorry, unfortunately download is not available now. Please try again later"
      );
      //window.location.href = './Raju_Saripally_CV.docx';
    });
  });
})(jQuery);
