// Avaa hampurilaisvalikko
document.querySelector('.hamburger').addEventListener('click', function() {
    document.getElementById('mobile-nav').style.visibility = 'visible';
});

// Sulje valikko
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('mobile-nav').style.visibility = 'hidden';
});