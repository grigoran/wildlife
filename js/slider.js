let imgs = document.querySelector(".slider__images");
let imgs_count = document.querySelectorAll(".slider__figure").length;
let rightArrow = document.querySelector(".right-arrow");
let leftArrow = document.querySelector(".left-arrow");
let slider_offset = 0;
let offset_value = 360;
let slider_width = imgs_count * 360;

//imgs.style.width = slider_width + "px";

function moveRight() {
  if (slider_offset > -slider_width + offset_value)
    slider_offset -= offset_value;
  else slider_offset = 0;
  imgs.style["margin-left"] = slider_offset + "px";
}
function moveLeft() {
  if (slider_offset < 0) slider_offset += offset_value;
  else slider_offset = -slider_width + offset_value;
  imgs.style["margin-left"] = slider_offset + "px";
}

rightArrow.addEventListener("click", moveRight);

leftArrow.addEventListener("click", moveLeft);

//let autoSlider = setInterval(moveRight, 10000);
