// themes object
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