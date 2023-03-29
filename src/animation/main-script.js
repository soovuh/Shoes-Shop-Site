const toggler = document.querySelector('.toggler');
const navigation = document.querySelector('.navigation');
const body = document.querySelector('body')
const searchButton = document.querySelector('.search-button')
const logoMini = document.querySelector('.logo-mini')
const searchInput = document.querySelector('.search-input')

searchInput.addEventListener('focus', () => {
    logoMini.classList.add('off')
    toggler.classList.add('off')

})

searchInput.addEventListener('blur', () => {
    logoMini.classList.remove('off')
    toggler.classList.remove('off')
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
}

window.addEventListener('resize', function () {
    checkScreenWidth();
});




