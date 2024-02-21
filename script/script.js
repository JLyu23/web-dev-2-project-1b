const menuButton = document.getElementById('menu-button');
const menuNav = document.getElementById('menu-nav');

menuButton.addEventListener('click', function () {
    const openMenu = menuButton.getAttribute('aria-expanded');
    
    openMenu === 'false' ? 
        (menuButton.setAttribute('aria-expanded', 'true'), menuNav.style.display = 'block')
        : (menuButton.setAttribute('aria-expanded', 'false'), menuNav.style.display = 'none')

});