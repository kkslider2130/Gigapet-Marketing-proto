const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
});

$(".owl-carousel").owlCarousel({
    autoplay: true,

    margin: 10,
    responsiveClass: true,


    responsive: {
        0: {
            items: 1,
            loop: true
        },
        680: {
            items: 2,
            loop: true
        },
        960: {
            items: 3,
            loop: true
        }

    }
});