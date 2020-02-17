$(document).ready(function () {
  "use strict";

  $(".determinate").each(function () {
    var width = $(this).text();
    $(this)
      .css("width", width)
      .empty()
      .append("");
  });

  $(".tooltipped").tooltip({
    delay: 50
  });

  var wow = new WOW({
    mobile: false
  });
  wow.init();
  $(".sa-view-project-detail").on("click");
  $("#back-button").on("click");
});