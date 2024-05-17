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

