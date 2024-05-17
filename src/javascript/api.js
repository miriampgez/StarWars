// api.js

async function obtenerDatosSWAPI(endpoint) {
    const url = `https://swapi.dev/api/${endpoint}/`;
    const response = await fetch(url);
    return response.json();
}

function obtenerIdURLRecursoSWAPI(url) {
    return Number(url.match(/([0-9]*)\/?$/)[1]);
}

function obtenerPeliculas() {
    return obtenerDatosSWAPI('https://swapi.dev/api/films/');
}

function obtenerPersonajes() {
    return obtenerDatosSWAPI('https://swapi.dev/api/people/');
}

function obtenerPlanetas() {
    return obtenerDatosSWAPI('https://swapi.dev/api/planets/');
}

function obtenerNaves() {
    return obtenerDatosSWAPI('https://swapi.dev/api/starships/');
}

function obtenerVehiculos() {
    return obtenerDatosSWAPI('https://swapi.dev/api/vehicles/');
}

function obtenerEspecies() {
    return obtenerDatosSWAPI('https://swapi.dev/api/species/');
}
