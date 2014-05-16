$(function () {
  "use strict";

  function onNavLinkClick (event) {
    if (nav.hasClass("nav--active")) {
      navLinks.each(function () {
        $(this).toggleClass("nav-link--active", this === event.currentTarget);
      });
      nav.removeClass("nav--active");
    } else {
      nav.addClass("nav--active");
    }
  }

  var nav      = $("#main-nav"),
      navLinks = nav.find(".nav-link");

  navLinks.on("click", onNavLinkClick);

});
