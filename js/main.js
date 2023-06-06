const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile-nav');

menu_btn.addEventListener('click', function () {
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
})

document.querySelectorAll('.nav-link').forEach(n => n. addEventListener('click', () => {
    menu_btn.classList.remove('is-active');
    mobile_menu.classList.remove('is-active');
}))