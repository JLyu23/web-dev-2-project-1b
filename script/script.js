const menuButton = document.getElementById('menu-button');
const menuNav = document.getElementById('menu-nav');

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

    // openMenu === 'false' ? 
    //     (menuButton.setAttribute('aria-expanded', 'true'), showNav())
    //     : (menuButton.setAttribute('aria-expanded', 'false'), hideNav());

    openMenu === 'false' ?
        showNav()
        : hideNav();
}

menuButton.addEventListener('click', function () {
    toggleNav();
    hamburgerState(menuNav.style.display === 'block');
});

window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;

    windowWidth > 768 ? 
          (showNav(), hamburgerState(true)) 
        : (hideNav(), hamburgerState(false));
});