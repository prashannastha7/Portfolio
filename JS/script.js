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

