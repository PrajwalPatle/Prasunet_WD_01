window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.95)';
    } else {
        navbar.style.backgroundColor = 'rgba(51, 51, 51, 0.8)';
    }
});
