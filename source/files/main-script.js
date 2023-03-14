
const toggler = document.querySelector('.toggler');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body')

toggler.addEventListener('click', () => {
    navigation.classList.toggle('show');
    toggler.classList.toggle('show');
});

function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1000) {
        navigation.classList.remove('show');
        toggler.classList.remove('show');
    }
}

function changeBackgroundAnim() {
    if ('right' in body.classList) {
        console.log('right')
        body.classList.remove('right')
        body.classList.add('left')
    }
    else {
        body.classList.add('right')
        body.classList.remove('left')
    }
}

window.addEventListener('resize', function () {
    checkScreenWidth();
});




setTimeout(changeBackgroundAnim, 1);

