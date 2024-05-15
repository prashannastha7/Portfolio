/* toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Scroll sections active link */

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 200;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
});

/*  sticky navbar */
let header = document.querySelector('header');

header.classList.toggle('sticky', window.scrollY > 100);
};

/* Scroll Reveal */
ScrollReveal({
    reset: true,
    duration: 2000,
    distance: '80px',
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content p, .about-img', { origin: 'left' });
ScrollReveal().reveal('.about-content', { origin: 'right' });

/*typed JS */
const typed = new Typed('.multiple-text', {
    strings: ['Backend Developer', 'Designer', 'Student'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true
});