$(document).ready(function () {
  $(".thumbnails-slider").on("init", function (e, slider) {
    $(slider.$slides.find(".thumbnail-button")).each(function (index) {
      $(this).on("click", function () {
        $(slider.$slides.find(".thumbnail-button").removeAttr("aria-current"));
        $(this).attr("aria-current", true);
        var index = $(this).closest(".slick-slide").data("slick-index");
        $(".main-image-slider").slick("slickGoTo", index);
      });
    });
  });

  $(".thumbnails-slider").slick({
    vertical: true,
    slidesToShow: 4,
    infinite: false,
  });

  $(".main-image-slider").slick({
    slidesToShow: 1,
    draggable: false,
  });
  $(".main-image-slider").on(
    "beforeChange",
    function (e, slider, currentSlide, nextSlide) {
      $('.thumbnails-slider .thumbnail-button[aria-current="true"]').removeAttr(
        "aria-current"
      );
      $(".thumbnails-slider").slick("slickGoTo", nextSlide);
      $(".thumbnails-slider .thumbnail-button:eq(" + nextSlide + ")").attr(
        "aria-current",
        true
      );
    }
  );
});
