// Funktion til at hente en tilfældig Chuch Norris joke fra API.
function getJoke() {
    // Anmoder om joken fra API'en
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            //Viser joken i elementet 'jokeText'
            document.getElementById('jokeText').innerText = data.value;
        })
        // Håndterer fejl ved at vise en fejlmeddelelse
        .catch(error => {
            console.error("Der var en fejl", error);
            document.getElementById('jokeText').innerText = "Kunne ikke hente vittigheden.";
        });
}

//Funktionen til at hente data om en tilfældig Star Wars planet fra API.
function getPlanet() {
    let randomPlanetId = Math.floor(Math.random() * 60) + 1;

    fetch(`https://swapi.dev/api/planets/${randomPlanetId}/`)
        .then(response => response.json()) //Vi konverterer svaret til JSON.
        .then(data => {
            // Viser planetinformationen i elemenetet 'planetText'
            document.getElementById('planetText').innerText = "Planet Navn: " + data.name + ", Klima: " + data.climate + ", Terrain: " + data.terrain;
        })
        .catch(error => {
            //Håndterer fejl med en fejlmeddelelse
            console.error("Der opstod en fejl", error);
            document.getElementById('planetText').innerText = "Kunne ikke finde planten.";
        });
}
