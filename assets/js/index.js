const heroImage = document.querySelector('.hero__image');
let windowWidth = window.innerWidth;
let resizeTimer;

init();

function init() {
    updateHeroImageBasedOnSize();

    window.addEventListener('resize', () => {
        if (window.innerWidth !== windowWidth) {
            windowWidth = window.innerWidth;

            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function () {
                window.location.reload();
            }, 250);
        }
    });
}

function updateHeroImageBasedOnSize() {
    const desktopImage = heroImage.getAttribute('data-src-desktop');
    const mobileImage = heroImage.getAttribute('data-src-mobile');

    if (windowWidth >= 1024) {
        heroImage.setAttribute('src', desktopImage);
    } else {
        heroImage.setAttribute('src', mobileImage);
    }
}
