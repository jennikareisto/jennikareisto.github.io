document.querySelector('.hamburger').addEventListener('click', function() {
    document.getElementById('mobile-nav').hidden = false;
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('mobile-nav').hidden = true;
});