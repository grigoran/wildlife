let imgs = document.querySelector(".slider__images");
let imgs_count = document.querySelectorAll(".slider__figure").length;
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let slider_offset = 0;
let offset_value = 360;
let slider_width = imgs_count * 360;

imgs.style.width = slider_width + "px";

rightArrow.addEventListener("click", () => {
  if (slider_offset > -slider_width + 3 * offset_value) {
    slider_offset -= offset_value;
    imgs.style["margin-left"] = slider_offset + "px";
  }
});

leftArrow.addEventListener("click", () => {
  if (slider_offset < 0) {
    slider_offset += offset_value;
    imgs.style["margin-left"] = slider_offset + "px";
  }
});
