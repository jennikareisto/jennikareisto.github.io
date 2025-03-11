<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nimi = htmlspecialchars($_POST["nimi"]);
    $sahkoposti = htmlspecialchars($_POST["sahkoposti"]);
    $viesti = htmlspecialchars($_POST["viesti"]);

    $to = "jenni@kareisto.com";  // Muuta tähän oma sähköpostisi
    $subject = "Uusi yhteydenotto Jahkailutoimistosta";
    $headers = "From: $sahkoposti\r\nReply-To: $sahkoposti\r\nContent-Type: text/plain; charset=UTF-8";

    $message = "Nimi: $nimi\n";
    $message .= "Sähköposti: $sahkoposti\n\n";
    $message .= "Viesti:\n$viesti";

    if (mail($to, $subject, $message, $headers)) {
        echo "Viesti lähetetty onnistuneesti!";
    } else {
        echo "Virhe viestin lähettämisessä!";
    }
}
?>