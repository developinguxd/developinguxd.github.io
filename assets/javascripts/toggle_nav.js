(function(){
  "use strict";

  $("[data-toggle-nav]").on("click", function () {
    event.preventDefault();

    var el = $(this),
          target = $(el.attr("data-toggle-nav"));

          target.toggleClass("hidden-xs");
          el.toggleClass("active");
  });

}());
