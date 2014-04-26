(function() {
  "use strict";

  $(document).on("show.bs.collapse", function() {
    $(this).find(".glyphicon")
      .removeClass("glyphicon-chevron-down")
      .addClass("glyphicon-chevron-up");
  });

  $(document).on("hide.bs.collapse", function() {
    $(this).find(".glyphicon")
      .removeClass("glyphicon-chevron-up")
      .addClass("glyphicon-chevron-down");
  });
}());
