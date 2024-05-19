// index.js

document.addEventListener('DOMContentLoaded', async () => {
    const moviesList = document.getElementById('movies-list');
    const movies = await obtenerDatosSWAPI('films');
    movies.results.forEach(movie => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = `pelicula.html?id=${obtenerIdURLRecursoSWAPI(movie.url)}`;
        a.textContent = movie.title;
        li.appendChild(a);
        moviesList.appendChild(li);
    });
});

async function obtenerDatosSWAPI(endpoint) {
    const url = `https://swapi.dev/api/${endpoint}/`;
    const response = await fetch(url);
    return response.json();
}

async function obtenerPeliculas() {
    return obtenerDatosSWAPI('films');
}

async function obtenerPersonajes() {
    return obtenerDatosSWAPI('people');
}

async function obtenerPlanetas() {
    return obtenerDatosSWAPI('planets');
}

async function obtenerNaves() {
    return obtenerDatosSWAPI('starships');
}

async function obtenerVehiculos() {
    return obtenerDatosSWAPI('vehicles');
}

async function obtenerEspecies() {
    return obtenerDatosSWAPI('species');
}

function obtenerIdURLRecursoSWAPI(url) {
    return Number(url.match(/([0-9]*)\/?$/)[1]);
}

function mostrarPeliculasEnLista(peliculas) {
    const lista = document.getElementById('lista');

    peliculas.forEach(pelicula => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `pelicula.html?id=${obtenerIdURLRecursoSWAPI(pelicula.url)}`;
        link.textContent = pelicula.title;
        link.addEventListener('click', (event) => {
            event.preventDefault();
            mostrarDetallesPelicula(pelicula);
        });

        listItem.appendChild(link);
        lista.appendChild(listItem);
    });
}

async function mostrarDetallesPelicula(pelicula) {
    try {
        const peliculaId = obtenerIdURLRecursoSWAPI(pelicula.url);
        const detallesPelicula = await obtenerDatosSWAPI(`films/${peliculaId}`);

        window.location.href = `pelicula.html?id=${peliculaId}`;
    } catch (error) {
        console.error('Error al obtener detalles de la película:', error);
    }
}
