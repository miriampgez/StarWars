// pelicula.js
// js/pelicula.js

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const movieId = urlParams.get('id');

    if (movieId) {
        fetch(`https://swapi.dev/api/films/${movieId}/`)
            .then(response => response.json())
            .then(movieData => {
                // Actualizar los detalles de la película
                const movieDetailsContainer = document.getElementById("movieDetails");
                movieDetailsContainer.innerHTML = `
                    <h2>${movieData.title} (Episode ${movieData.episode_id})</h2>
                    <p>Descripción: ${movieData.opening_crawl}</p>
                `;

                // Función para obtener los recursos y añadirlos al DOM
                const populateResource = (resourceId, resourceUrls) => {
                    const container = document.getElementById(resourceId).querySelector('ul');
                    resourceUrls.forEach(url => {
                        fetch(url)
                            .then(response => response.json())
                            .then(data => {
                                const li = document.createElement('li');
                                li.innerHTML = `<a href="${resourceId.slice(0, -1)}.html?id=${obtenerIdURLRecursoSWAPI(url)}">${data.name || data.title}</a>`;
                                container.appendChild(li);
                            })
                            .catch(error => console.error('Error al obtener los recursos:', error));
                    });
                };

                // Rellenar las listas de personajes, planetas, naves, vehículos y especies
                populateResource('characters', movieData.characters);
                populateResource('planets', movieData.planets);
                populateResource('starships', movieData.starships);
                populateResource('vehicles', movieData.vehicles);
                populateResource('species', movieData.species);
            })
            .catch(error => {
                console.error('Hubo un problema con la solicitud:', error);
            });
    } else {
        console.error('No se proporcionó un ID de película en la URL.');
    }
});

// Función para obtener el ID del recurso de la URL
function obtenerIdURLRecursoSWAPI(url) {
    return Number(url.match(/([0-9]*)\/?$/)[1]);
}
