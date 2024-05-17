// personaje.js

document.addEventListener('DOMContentLoaded', async () => {
    const params = new URLSearchParams(document.location.search);
    const id = params.get('id');
    const character = await obtenerDatosSWAPI(`people/${id}`);

    document.getElementById('character-name').textContent = character.name;
    document.getElementById('character-details').textContent = `Height: ${character.height}, Mass: ${character.mass}, Hair Color: ${character.hair_color}, Skin Color: ${character.skin_color}, Eye Color: ${character.eye_color}, Birth Year: ${character.birth_year}, Gender: ${character.gender}`;
});
