function indexAnimation(carousel, arrowIcons) {
  let isDragStart = false,
    isDragging = false,
    prevPageX,
    prevScrollLeft,
    positionDiff;
  let firstImgWidth;

  const widthCalculate = () => {
    const firstImg = carousel.querySelector("img");
    firstImgWidth = Math.ceil(firstImg.scrollWidth) + 8.7;
    return firstImgWidth;
  };

  arrowIcons.forEach((icon) => {
    firstImgWidth = widthCalculate();
    icon.addEventListener("click", () => {
      carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
    });
  });

  const autoSlide = () => {
    if (carousel.scrollLeft == carousel.scrollWidth - carousel.clientWidth)
      return;
    positionDiff = Math.abs(positionDiff);
    firstImgWidth = widthCalculate();
    let valDiff = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) {
      return (carousel.scrollLeft +=
        positionDiff > firstImgWidth / 3 ? valDiff : -positionDiff);
    }
    carousel.scrollLeft -=
      positionDiff > firstImgWidth / 3 ? valDiff : -positionDiff;
  };

  const dragStart = (e) => {
    // updating global variables value on touch start or mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
  };

  const dragging = (e) => {
    // scrolling images/carousel to left according to touch or mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging");
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
  };

  const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if (!isDragging) return;
    isDragging = false;
    autoSlide();
  };

  carousel.addEventListener("touchmove", dragging);
  carousel.addEventListener("touchstart", dragStart);
  carousel.addEventListener("touchend", dragStop);
  carousel.addEventListener("touchcancel", dragStop);
  carousel.addEventListener("mousemove", dragging);
  carousel.addEventListener("mousedown", dragStart);
  carousel.addEventListener("mouseup", dragStop);
  carousel.addEventListener("mouseleave", dragStop);

  setTimeout(widthCalculate, 500);
}

export { indexAnimation };
