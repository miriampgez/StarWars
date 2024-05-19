document.addEventListener('DOMContentLoaded', () => {
const urlParams = new URLSearchParams(window.location.search);
const vehicleId = urlParams.get('id');

fetch(`https://swapi.dev/api/vehicles/${vehicleId}/`)
    .then(response => response.json())
    .then(vehicleData => {
        const vehicleDetailsContainer = document.getElementById("vehicleDetails");
        vehicleDetailsContainer.innerHTML = `
                    <h2>${vehicleData.name}</h2>
                    <p>Modelo: ${vehicleData.model}</p>
                    <p>Fabricante: ${vehicleData.manufacturer}</p>
                `;
    })
    .catch(error => {
        console.log('Hubo un problema con la solicitud:', error);
    });
});
