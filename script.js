// Avaa hampurilaisvalikko
document.querySelector('.hamburger').addEventListener('click', function() {
    document.getElementById('mobile-nav').style.visibility = 'visible';
});

// Sulje valikko
document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('mobile-nav').style.visibility = 'hidden';
});
// FAQ-osion klikkauslogiikka
document.querySelectorAll(".faq-question").forEach(button => {
    button.addEventListener("click", function () {
        // Haetaan vastaus-elementti (saman kysymyksen sisällä)
        let answer = this.nextElementSibling;

        // Näytetään tai piilotetaan vastaus
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            // Suljetaan kaikki muut vastaukset ennen uuden avaamista
            document.querySelectorAll(".faq-answer").forEach(ans => ans.style.display = "none");
            answer.style.display = "block";
        }
    });
});