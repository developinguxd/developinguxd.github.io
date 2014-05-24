(function($, window, undefined) {
  "use strict";

  $(function () {
    var form    = $("#mc-embedded-subscribe-form"),
        action  = form.attr("action"),
        method  = form.attr("method"),
        success = form.find(".js-done-response"),
        error   = form.find(".js-fail-response"),
        request;

    function reset () {
      error.add(success).addClass("hidden").text("");
    }

    form.on("submit", function (event) {
      event.preventDefault();
      request = $.ajax({
        type        : method,
        url         : action,
        data        : form.serialize(),
        cache       : false,
        dataType    : "json",
        contentType : "application/json; charset=utf-8"
    });

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
