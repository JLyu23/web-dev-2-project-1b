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

scrollToTopButton.addEventListener('click', function (event) {
   event.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
});


// Theme Switch Buttons

// target buttons from HTML document
// & use a name to reference for the click event
const catpuccinButton = document.getElementById('catpuccin');
const catpuccin = 'catpuccin';
const nicButton = document.getElementById('nic');
const nic = 'nic';
const jennyButton = document.getElementById('jen');
const jenny = 'jenny';
const kylButton = document.getElementById('kyl');
const kyl = 'kyl';
const natButton = document.getElementById('nat');
const nat = 'nat';

// grab body element to check background color in applyValueToCssVars
const body = document.querySelector('body');

//root
const rootEl = document.documentElement;

// theme object
const theme = {
    catpuccin: {
        backgroundColor: getComputedStyle(rootEl).getPropertyValue('--background-color'),
        bodyTextColor: getComputedStyle(rootEl).getPropertyValue('--body-text-color'),
        bodyHeadingColor: getComputedStyle(rootEl).getPropertyValue('--body-heading-color'),
        menuButtonColor: getComputedStyle(rootEl).getPropertyValue('--menu-button-color'),
        navBackgroundColor: getComputedStyle(rootEl).getPropertyValue('--nav-background-color'),
        linkTextColorPrimary: getComputedStyle(rootEl).getPropertyValue('--link-text-color-primary'),
        linkTextColorSecondary: getComputedStyle(rootEl).getPropertyValue('--link-text-color-secondary')
    },

    nic: {
        backgroundColor: getComputedStyle(rootEl).getPropertyValue('--nic-background-color'),
        bodyHeadingColor: getComputedStyle(rootEl).getPropertyValue('--nic-body-heading-color'),
        bodyTextColor: getComputedStyle(rootEl).getPropertyValue('--nic-body-text-color'),
        menuButtonColor: getComputedStyle(rootEl).getPropertyValue('--nic-menu-button-color'),
        navBackgroundColor: getComputedStyle(rootEl).getPropertyValue('--nic-nav-background-color'), 
        linkTextColorPrimary: getComputedStyle(rootEl).getPropertyValue('--nic-link-text-color-primary'),
        linkTextColorSecondary: getComputedStyle(rootEl).getPropertyValue('--nic-link-text-color-secondary')
    }, 

    jenny: {
        backgroundColor: getComputedStyle(rootEl).getPropertyValue('--jen-background-color'),
        bodyHeadingColor: getComputedStyle(rootEl).getPropertyValue('--jen-body-heading-color'),
        bodyTextColor: getComputedStyle(rootEl).getPropertyValue('--jen-body-text-color'),
        menuButtonColor: getComputedStyle(rootEl).getPropertyValue('--jen-menu-button-color'),
        navBackgroundColor: getComputedStyle(rootEl).getPropertyValue('--jen-nav-background-color'), 
        linkTextColorPrimary: getComputedStyle(rootEl).getPropertyValue('--jen-link-text-color-primary'),
        linkTextColorSecondary: getComputedStyle(rootEl).getPropertyValue('--jen-link-text-color-secondary')
    },

    kyl: {
        backgroundColor: getComputedStyle(rootEl).getPropertyValue('--kyl-background-color'),
        bodyHeadingColor: getComputedStyle(rootEl).getPropertyValue('--kyl-body-heading-color'),
        bodyTextColor: getComputedStyle(rootEl).getPropertyValue('--kyl-body-text-color'),
        menuButtonColor: getComputedStyle(rootEl).getPropertyValue('--kyl-menu-button-color'),
        navBackgroundColor: getComputedStyle(rootEl).getPropertyValue('--kyl-nav-background-color'), 
        linkTextColorPrimary: getComputedStyle(rootEl).getPropertyValue('--kyl-link-text-color-primary'),
        linkTextColorSecondary: getComputedStyle(rootEl).getPropertyValue('--kyl-link-text-color-secondary')
    },

    nat: {
        backgroundColor: getComputedStyle(rootEl).getPropertyValue('--nat-background-color'),
        bodyHeadingColor: getComputedStyle(rootEl).getPropertyValue('--nat-body-heading-color'),
        bodyTextColor: getComputedStyle(rootEl).getPropertyValue('--nat-body-text-color'),
        menuButtonColor: getComputedStyle(rootEl).getPropertyValue('--nat-menu-button-color'),
        navBackgroundColor: getComputedStyle(rootEl).getPropertyValue('--nat-nav-background-color'), 
        linkTextColorPrimary: getComputedStyle(rootEl).getPropertyValue('--nat-link-text-color-primary'),
        linkTextColorSecondary: getComputedStyle(rootEl).getPropertyValue('--nat-link-text-color-secondary')
    }
};

//function which applies the updated var value to root 
function applyValueToCssVars(person){
    // Check if the body background color is not equal to ${person}Theme.${person}BackgroundColor
    if (body.style.backgroundColor !== theme[person].backgroundColor) {
        // Apply the themes color values to the CSS Variable
        rootEl.style.setProperty('--background-color', theme[person].backgroundColor);
        rootEl.style.setProperty('--body-heading-color', theme[person].bodyHeadingColor);
        rootEl.style.setProperty('--body-text-color', theme[person].bodyTextColor);
        rootEl.style.setProperty('--menu-button-color', theme[person].menuButtonColor);
        rootEl.style.setProperty('--nav-background-color', theme[person].navBackgroundColor);
        rootEl.style.setProperty('--link-text-color-primary', theme[person].linkTextColorPrimary);
        rootEl.style.setProperty('--link-text-color-secondary', theme[person].linkTextColorSecondary);
    }
};

//event listener for each button, passing it the name as a value
catpuccinButton.addEventListener('click', () => {
    applyValueToCssVars(catpuccin);
});

nicButton.addEventListener('click', () => {
    applyValueToCssVars(nic);
});

jennyButton.addEventListener('click', () => {
    applyValueToCssVars(jenny);
});

kylButton.addEventListener('click', () => {
    applyValueToCssVars(kyl);
});

natButton.addEventListener('click', () => {
    applyValueToCssVars(nat);
});