// js/nave.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const starshipId = urlParams.get('id');

    if (starshipId) {
        fetch(`https://swapi.dev/api/starships/${starshipId}/`)
            .then(response => response.json())
            .then(starshipData => {
                const starshipDetailsContainer = document.getElementById("starshipDetails");
                starshipDetailsContainer.innerHTML = `
                    <h2>${starshipData.name}</h2>
                    <p>Modelo: ${starshipData.model}</p>
                    <p>Fabricante: ${starshipData.manufacturer}</p>
                `;
            })
            .catch(error => {
                console.error('Hubo un problema con la solicitud:', error);
            });
    } else {
        console.error('No se proporcionó un ID de nave espacial en la URL.');
    }
});
