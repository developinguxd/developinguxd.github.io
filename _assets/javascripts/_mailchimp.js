(function($, window, undefined) {
  "use strict";

  var form       = $("#mailchimp-form"),
      input      = form.find("input[type=email]"),
      label      = form.find("label"),
      button     = form.find("button[type=submit]"),
      buttonText = button.text(),
      labelText  = label.text();

  form.ajaxChimp({callback: function () {
    button.removeClass("sending");
    if (label.hasClass("error")) {
      button.addClass("error");
      button.text("Error");
    }
    input.add(button).prop("disabled", false);
  }});

  form.on("submit", function () {
    input.add(button).prop("disabled", true);
    button.text("Sending ...").addClass("sending").removeClass("error");
  });

  input.on("keyup, focus", function () {
    $(this).removeClass("error");
    label.removeClass("error").text(labelText);
    button.text(buttonText).removeClass("error");
  });

}(jQuery, this));
