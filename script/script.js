const menuButton = document.getElementById('menu-button');
const menuNav = document.getElementById('menu-nav');
const scrollToTopButton = document.getElementById('top');
const backToTopLink = document.querySelector('a[href="#top"]');
const skipToContentLinks = document.querySelectorAll('.menu-nav a');


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
    const isOpen = menuNav.style.display === 'block';
    
    if (!isOpen) {
        showNav();
    } else {
        hideNav();
    }

    hamburgerState(!isOpen);
}

menuButton.addEventListener('click', function () {
    toggleNav();
});

window.addEventListener('resize', function() {
    const windowWidth = window.innerWidth;

    windowWidth > 768 ? (showNav(), hamburgerState(true)) 
        : (hideNav(), hamburgerState(false));
});



backToTopLink.addEventListener('click', function (event) {
    event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
});

skipToContentLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const targetSectionId = this.getAttribute('href').substring(1); // Remove the '#' from the href
        const targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });

           
            hamburgerState(false);
        }
    });
});

