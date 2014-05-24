(function($, window, undefined) {
  "use strict";

  var form       = $("#mailchimp-form"),
      input      = form.find("input[type=email]"),
      button     = form.find("button[type=submit]"),
      buttonText = button.text();

  form.ajaxChimp();

  $(document).on("ajaxStart", function () {
    input.add(button).prop("disabled", true);
    button.text("Sending ...").addClass("sending");
  });

  $(document).on("ajaxComplete", function () {
    input.add(button).prop("disabled", false);
    button.text(buttonText).removeClass("sending");
  });

}(jQuery, this));
