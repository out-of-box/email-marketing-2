// Anchor
$("#toFormJs").click(function (event) {

  $("html, body").animate({
    scrollTop: $(".anchorJs").offset().top
  },
    1000
  );
});
$("#toFormJs-2").click(function (event) {
  event.preventDefault();
  $("html, body").animate({
    scrollTop: $(".anchorJs").offset().top
  },
    1000
  );
});
$('#close-btn').click(function () {
  $('#paranja').hasClass('sub-modal__paranja--shown') ? $('#paranja').removeClass('sub-modal__paranja--shown') : "";
})
$('#paranja').click(function () {
  $('#paranja').hasClass('sub-modal__paranja--shown') ? $('#paranja').removeClass('sub-modal__paranja--shown') : "";
})