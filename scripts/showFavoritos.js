let mascotaFavorita = document.getElementById('favoritos-perro-gatos');
import { favoritos } from './getData.js';

// funcion que pinta las cards de las mascotas favoritas en el DOM
export const showFavoritos = async () => {
    // almacenamos la data de favoritos en una constante y la recorremos
    const data = await favoritos();
    data.forEach(element => {
        const { id, img, nombre, raza} = element;
        mascotaFavorita.innerHTML += `
        <div id="${id}" class="perro-fondo" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${img});">
            <h3 class="nombre-mascota">${nombre}</h3>
            <h4 class="raza">${raza}</h4>
        </div>
        `
    });
}
document.addEventListener('DOMContentLoaded',showFavoritos)