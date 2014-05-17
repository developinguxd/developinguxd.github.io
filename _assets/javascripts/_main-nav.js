$(function () {
  "use strict";

  function onNavLinkClick (event) {
    if ($(event.currentTarget).hasClass("nav-link--active")) {
      event.preventDefault();
    }

    navLinks.each(function () {
      $(this).toggleClass("nav-link--active", this === event.currentTarget);
    });
    nav.toggleClass("nav--active");
  }

  var nav      = $("#main-nav"),
      navLinks = nav.find(".nav-link");

  navLinks.on("click", onNavLinkClick);
});
