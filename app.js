const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.navigation');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('open');
    nav.classList.toggle('show-nav');
})