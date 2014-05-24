(function($, window, undefined) {
  "use strict";

  $(function () {
    var form    = $("#mc-embedded-subscribe-form"),
        input   = form.find("input[name=EMAIL]"),
        action  = form.attr("action"),
        success = form.find(".js-done-response"),
        error   = form.find(".js-fail-response"),
        request;

    function reset () {
      error.add(success).addClass("hidden").text("");
    }

    form.on("submit", function (event) {
      event.preventDefault();
      request = $.post(action);
      request.done(function onRequestDone (result) {
        reset();
        result === "success" && success.text("Well done! See you soon!");
      });
      request.fail(function onRequestFail (error) {
        reset();
        success.text("O-oh: " + error.message);
      });

    });
  });
}(jQuery, this));
