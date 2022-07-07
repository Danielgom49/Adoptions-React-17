//importo las funciones de getData
import { getGatos } from "./getData.js";
import { getPerros } from "./getData.js";
import { showMascotas1 } from "./showMascotas.js"
import { showMascotas2 } from "./showMascotas.js"

let mostrar = document.getElementById('cards-perro-gatos');
let showP = document.getElementById('showP');
let showG = document.getElementById('showG');
let botonPerro = document.getElementById('botonPerro');
let botonGato = document.getElementById('botonGato');


//funcion que se ejecuta en caso de que se de click en el botón para mostrar los perros
export const mascotasPerro = () => {
    botonPerro.addEventListener('click', async (e) => {
        e.preventDefault();
        showG.innerHTML = '';
        // se guarda la data de los perros en una constante
        const perros = await getPerros();
        // llamo la funcion showMascota1 pasandole por parametros la data de perros y la variable donde se pintará los datos
        showMascotas1(perros, showP);
        botonPerro.style.opacity = '1';
        botonGato.style.opacity = '0.5';
    });
}
//funcion que se ejecuta en caso de que se de click en el botón para mostrar los gatos
export const mascotasGato = () => {
    botonGato.addEventListener('click', async (e) => {
        e.preventDefault();
        showP.innerHTML = '';
        // se guarda la data de los gatos en una constante
        const gatos = await getGatos();
        // llamo la funcion showMascota2 pasandole por parametros la data de gatos y la variable donde se pintará los datos
        showMascotas2(gatos, showG);
        botonGato.style.opacity = '1';
        botonPerro.style.opacity = '0.5';
    })
}

