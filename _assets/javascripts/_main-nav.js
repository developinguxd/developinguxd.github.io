$(function () {
  "use strict";

  var nav      = $("[data-page-nav]"),
      navLinks = nav.find(".page-nav__link");

  function onNavLinkClick (event) {
    if ($(event.currentTarget).hasClass("page-nav__link--active")) {
      event.preventDefault();
    }
    navLinks.each(function () {
      $(this).toggleClass("page-nav__link--active", this === event.currentTarget);
    });
    nav.toggleClass("page-nav--active");
  }


  navLinks.on("click", onNavLinkClick);
});
