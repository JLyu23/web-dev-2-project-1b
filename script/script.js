import { theme } from "./themes.js"

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

// backToTopLink.addEventListener('click', function (event) {
//     event.preventDefault();
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth',
//     });
// });

// skipToContentLinks.forEach(link => {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();

//         const targetSectionId = this.getAttribute('href').substring(1); // Remove the '#' from the href
//         const targetSection = document.getElementById(targetSectionId);

//         if (targetSection) {
//             targetSection.scrollIntoView({
//                 behavior: 'smooth'
//             });

           
//             hamburgerState(false);
//         }
//     });
// });

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