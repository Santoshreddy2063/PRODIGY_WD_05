// script.js
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'linear-gradient(to right, #0044cc, #0099cc)';
    } else {
        navbar.style.background = 'linear-gradient(to right, #0066ff, #00ccff)';
    }
});
