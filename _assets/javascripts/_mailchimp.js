(function($, window, undefined) {
  "use strict";

  function onDone (result) {
    if (result === "success") {
      $("#mailchimp-form").find("button, input").remove();
    }
  }

  function addSubmitHandler () {
    $("#mailchimp-form").ajaxChimp({
      callback: onDone
    });
  }

  function removeSubmitHandler () {
    $("#mailchimp-form").off();
  }


  $(document).on("ajaxSend", function () {
    removeSubmitHandler();
  });

  $(document).on("ajaxDone", function () {
    addSubmitHandler();
  });

  addSubmitHandler();

}(jQuery, this));
