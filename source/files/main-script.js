
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

window.addEventListener('resize', function () {
    checkScreenWidth();
});




