let brojac = 0;

function azurirajPrikaz() {
    document.getElementById("brojac_prikazivac").innerHTML = brojac;
}


azurirajPrikaz();

document.getElementById("dugme1").onclick = function() {
    brojac -= 1;
    azurirajPrikaz();
};

document.getElementById("dugme2").onclick = function() {
    brojac = 0;
    azurirajPrikaz();
};

document.getElementById("dugme3").onclick = function() {
    brojac += 1;
    azurirajPrikaz();
};
