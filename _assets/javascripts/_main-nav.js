$(function () {
  "use strict";

  var nav      = $("#main-nav"),
      navLinks = nav.find(".nav-link");

  function onNavLinkClick (event) {
    debugger;
    if ($(event.currentTarget).hasClass("nav-link--active")) {
      event.preventDefault();
    }
    debugger;
    navLinks.each(function () {
      $(this).toggleClass("nav-link--active", this === event.currentTarget);
    });
    nav.toggleClass("nav--active");
  }


  navLinks.on("click", onNavLinkClick);
});
