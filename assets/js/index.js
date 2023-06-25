const nav = document.querySelector('.nav');
const navIcon = document.querySelector('.nav__navicon');
const heroImage = document.querySelector('.hero__image');
let windowWidth = window.innerWidth;
let resizeTimer;

init();

function init() {
    updateHeroImageBasedOnSize();
    windowWidth < 1024 && handleMobileNav();

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

    if (windowWidth > 1024) {
        heroImage.setAttribute('src', desktopImage);
    } else {
        heroImage.setAttribute('src', mobileImage);
    }
}

function handleMobileNav() {
    const dropdownItems = document.querySelectorAll('.nav__item--dropdown');

    navIcon.addEventListener('click', () => {
        nav.classList.toggle('active');
    });

    dropdownItems.forEach((item) => {
        item.addEventListener('click', (e) => {
            const currentItem = e.target.closest('.nav__item--dropdown');
            currentItem && currentItem.classList.toggle('active');
        });
    });
}
