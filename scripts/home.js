import { mascotasPerro } from './mascotas.js';
import { mascotasGato } from './mascotas.js';
import { redireccionar } from './redireccionar.js';

const mascotas = document.getElementById('botonMascota');

//home
const home = () => {
    // eventos click para los botones los cuales muestran las mascotass
    mascotas.addEventListener('submit', mascotasPerro())
    mascotas.addEventListener('submit', mascotasGato())
}
home()
redireccionar()