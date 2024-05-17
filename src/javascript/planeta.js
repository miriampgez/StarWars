// js/planeta.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const planetId = urlParams.get('id');

    if (planetId) {
        fetch(`https://swapi.dev/api/planets/${planetId}/`)
            .then(response => response.json())
            .then(planetData => {
                const planetDetailsContainer = document.getElementById("planetDetails");
                planetDetailsContainer.innerHTML = `
                    <h2>${planetData.name}</h2>
                    <p>Clima: ${planetData.climate}</p>
                    <p>Terreno: ${planetData.terrain}</p>
                `;
            })
            .catch(error => {
                console.error('Hubo un problema con la solicitud:', error);
            });
    } else {
        console.error('No se proporcionó un ID de planeta en la URL.');
    }
});
