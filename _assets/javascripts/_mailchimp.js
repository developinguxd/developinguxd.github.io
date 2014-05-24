(function($, window, undefined) {
  "use strict";

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

  $("#mailchimp-form").ajaxChimp();

}(jQuery, this));
