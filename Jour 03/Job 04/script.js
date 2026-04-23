
$("#mon-input").focus(function () {
  $(this).animate({ width: "400px" }, 400); 
});


$("#mon-input").blur(function () {
  $(this).animate({ width: "200px" }, 400); 
});


$("#mon-input").css("width", "200px");