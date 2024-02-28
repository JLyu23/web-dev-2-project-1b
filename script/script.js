const menuButton = document.getElementById('menu-button');
const menuNav = document.getElementById('menu-nav');
const scrollToTopButton = document.getElementById('top');

function showNav() {
    menuNav.style.display = 'block';
};

function hideNav() {
    menuNav.style.display = 'none';
};

function hamburgerState(isOpen) {
    menuButton.setAttribute('aria-expanded', isOpen.toString());
};

function toggleNav() {
    const openMenu = menuButton.getAttribute('aria-expanded');

    openMenu === 'false' ? showNav()
        : hideNav();
}

menuButton.addEventListener('click', function () {
    toggleNav();
    hamburgerState(menuNav.style.display === 'block');
});

window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;

    windowWidth > 768 ? (showNav(), hamburgerState(true)) 
        : (hideNav(), hamburgerState(false));
});
<<<<<<< HEAD
// random
=======

>>>>>>> 10854da470fb29ba7ad6694e9a3d8bb8fc4db425
scrollToTopButton.addEventListener('click', function (event) {
   event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});