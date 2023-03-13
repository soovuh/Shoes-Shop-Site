const wrapper = document.querySelector('.wrapper');
const login_link = document.querySelector('.login-link');
const register_link = document.querySelector('.register-link');
const btn_popup = document.querySelector('.btnLogin-popup');
const icon_close = document.querySelector('.icon-close');
const icon_close_forgot = document.querySelector('.icon-close-forgot')
const toggler = document.querySelector('.toggler');
const navigation = document.querySelector('.navigation');
const forgot_box = document.querySelector('.forgot-box')
const forgot_btn = document.querySelector('.forgot-a');


forgot_btn.addEventListener('click', () => {
    forgot_box.classList.add('active');
    wrapper.classList.remove('active-popup');

});

icon_close_forgot.addEventListener('click', () => {
    forgot_box.classList.remove('active');
    wrapper.classList.add('active-popup');
});

toggler.addEventListener('click', () => {
    navigation.classList.toggle('show');
    toggler.classList.toggle('show');
});

register_link.addEventListener('click', () => {
    wrapper.classList.add('active');
});

login_link.addEventListener('click', () => {
    wrapper.classList.remove('active');
});

btn_popup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
    navigation.classList.remove('show');
    toggler.classList.remove('show');
    forgot_box.classList.remove('active');

});

icon_close.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});


function checkScreenWidth() {
    const screenWidth = window.innerWidth;
    if (screenWidth >= 1000) {
        navigation.classList.remove('show');
        toggler.classList.remove('show');
    }
}

function login_show() {
    wrapper.classList.add('active-popup');
}

setTimeout(login_show, 1500);

window.addEventListener('resize', function () {
    checkScreenWidth();
});


