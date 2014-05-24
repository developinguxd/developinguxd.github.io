(function($, window, undefined) {
  "use strict";

  function onDone (result) {
    debugger;
    if (result === "success") {
      $("#mailchimp-form").find("button, input").remove();
    }
  }

  function addSubmitHandler () {
    $("#mailchimp-form").find("button, input").prop("disabled", true);
  }

  function removeSubmitHandler () {
    $("#mailchimp-form").find("button, input").prop("disabled", false);
  }


  $(document).on("ajaxSend", function () {
    removeSubmitHandler();
  });

  $(document).on("ajaxDone", function () {
    addSubmitHandler();
  });

  $("#mailchimp-form").ajaxChimp({
    callback: onDone
  });

}(jQuery, this));
