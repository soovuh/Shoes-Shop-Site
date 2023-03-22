const carousel = document.querySelector('.carousel');
const arrowIcons = document.querySelectorAll('.carousel .icon');

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;
let firstImgWidth;
let scrollWidth;


const goToStart = () => {
    carousel.scrollLeft = 0;
    arrowIcons[1].style.display = 'block';
}


const showHideIcons = () => {
    scrollWidth = carousel.scrollWidth - carousel.clientWidth;
    if (Math.ceil(carousel.scrollLeft == 0)) {
        arrowIcons[0].style.display = 'none';

    }
    else {
        arrowIcons[0].style.display = 'block';
    }
    if (Math.ceil(carousel.scrollLeft) == scrollWidth) {
        arrowIcons[1].style.display = 'none';
        setTimeout(goToStart, 300);
    }
    else {
        arrowIcons[1].style.display = 'block';
    }
}

const widthCalculate = () => {
    const firstImg = carousel.querySelector('.firstImg');
    firstImgWidth = Math.ceil(firstImg.scrollWidth) + 11;
    return firstImgWidth;
}


arrowIcons.forEach(icon => {
    firstImgWidth = widthCalculate();
    icon.addEventListener('click', () => {
        carousel.scrollLeft += icon.id == 'left' ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    })
});

const autoSlide = () => {
    if (carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    positionDiff = Math.abs(positionDiff);
    firstImgWidth = widthCalculate();
    let valDiff = firstImgWidth - positionDiff;
    if (carousel.scrollLeft > prevScrollLeft) {
        return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDiff : -positionDiff;
    }
    carousel.scrollLeft -= positionDiff > firstImgWidth / 3 ? valDiff : -positionDiff;
}

const dragStart = (e) => {
    // updating global variables value on touch start or mouse down event
    isDragStart = true;
    prevPageX = e.pageX || e.touches[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    // scrolling images/carousel to left according to touch or mouse pointer
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add('dragging');
    positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons();
}

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove('dragging');
    if (!isDragging) return
    isDragging = false;
    autoSlide();
}

carousel.addEventListener('touchmove', dragging);
carousel.addEventListener('touchstart', dragStart);
carousel.addEventListener('touchend', dragStop);
carousel.addEventListener('touchcancel', dragStop);
carousel.addEventListener('mousemove', dragging);
carousel.addEventListener('mousedown', dragStart);
carousel.addEventListener('mouseup', dragStop);
carousel.addEventListener('mouseleave', dragStop);

setTimeout(widthCalculate, 500);