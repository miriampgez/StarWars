// pelicula.js

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(document.location.search);
    const id = params.get('id');
    const movie = await obtenerDatosSWAPI(`films/${id}`);

    document.getElementById('movie-title').textContent = movie.title;
    document.getElementById('movie-details').textContent = `Director: ${movie.director}, Producer: ${movie.producer}, Release Date: ${movie.release_date}`;

    const charactersList = document.getElementById('characters-list');
    for (const characterUrl of movie.characters) {
        const characterId = obtenerIdURLRecursoSWAPI(characterUrl);
        const character = await obtenerDatosSWAPI(`people/${characterId}`);
        const li = document.createElement('li');
        li.textContent = character.name;
        charactersList.appendChild(li);
    }
});
