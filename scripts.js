// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.color = '#ffcc00';
        });

        link.addEventListener('mouseout', () => {
            link.style.color = 'white';
        });
    });
});
