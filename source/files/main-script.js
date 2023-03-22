
const toggler = document.querySelector('.toggler');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body')
const searchButton = document.querySelector('.search-button')
const searchBoxWindow = document.querySelector('.search-box-window')
const closeSearchIcon = document.querySelector('.icon-close-search')

searchButton.addEventListener('click', () => {
    searchBoxWindow.classList.add('active')
})

closeSearchIcon.addEventListener('click', () => {
    searchBoxWindow.classList.remove('active')
})

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
    if (screenWidth >= 700) {
        searchBoxWindow.classList.remove('active')
    }
}

window.addEventListener('resize', function () {
    checkScreenWidth();
});




