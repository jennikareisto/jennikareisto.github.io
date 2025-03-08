document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const mobileNav = document.getElementById('mobile-nav');
    const closeBtn = document.querySelector('.close');

    hamburger.addEventListener('click', function() {
        mobileNav.hidden = false;
    });

    closeBtn.addEventListener('click', function() {
        mobileNav.hidden = true;
    });
});