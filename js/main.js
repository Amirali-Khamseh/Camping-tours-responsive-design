
const navMenu = document.querySelector('#nav-menu');
const navToggle = document.querySelector('#nav-toggle');
const navClose = document.querySelector('#nav-close');
const navLinks = document.querySelectorAll('.nav-link');

//Removing the mobile menu upon clicking any link
const linkRemoval = () => {
    navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkRemoval));


//Showing and hiding the menu 
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');

    })
}


//GASP
gsap.from('.home-img-2', 1.2, { opacity: 0, y: 200, delay: 0.2 })
gsap.from('.home-img-1', 1.2, { opacity: 0, y: 200, delay: 0.2 })
gsap.from('.home-data', 1.2, { opacity: 0, y: -60, delay: 0.4 })
gsap.from('.home-img-4', 1.2, { opacity: 0, y: -200, delay: 0.3 })
gsap.from('.home-bird1', 1.2, { opacity: 0, x: -80, delay: 0.5 })
gsap.from('.home-bird2', 1.2, { opacity: 0, x: 80, delay: 1.6 })