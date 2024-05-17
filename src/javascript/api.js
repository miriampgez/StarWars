// api.js

async function obtenerDatosSWAPI(endpoint) {
    const url = `https://swapi.dev/api/${endpoint}/`;
    const response = await fetch(url);
    return response.json();
}

function obtenerIdURLRecursoSWAPI(url) {
    return Number(url.match(/([0-9]*)\/?$/)[1]);
}

