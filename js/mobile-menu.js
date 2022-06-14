const mobileMenu = document.querySelector('.mobile-menu__list')
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');

mobileMenuIcon.addEventListener('click', showMobileMenu);

function showMobileMenu() {
    mobileMenu.classList.toggle('menu_visible')
}