import { getPerros } from './getData.js';
import { getGatos } from './getData.js';
let cards = document.getElementById('cards-perro-gatos');

// funcion que redirecciona a los detalles de la mascota deseada
export const redireccionar = () => {
    cards.addEventListener('click', async (e) => {
        const boton1 = e.target.classList.contains('perro-fondo');
        const boton2 = e.target.classList.contains('gato-fondo');
        const id = e.target.id
        // se hay un click en la card de perros se cumple la condicion
        if (boton1) {
                console.log('funciona');
                // almacena la data de los perros en una constante
                const infoMascota = await getPerros();
                // se crea un filtro de la constante ya declarada
                const info = infoMascota.filter(item=>item.id === Number(id));
                // se almacena la data de la mascota selecciona en el localStorage
                localStorage.setItem("Mascota", JSON.stringify(info))
                // al hacer click redirecciona a la página de los detalles de la mascota
                window.location.href = "infoMascotaPerro.html";
        }
        // se hay un click en la card de gatos se cumple la condicion
        else if(boton2){
            console.log('tambien funciona');
            // almacena la data de los gatos en una constante
            const infoMascota = await getGatos();
            // se crea un filtro de la constante ya declarada
            const info = infoMascota.filter(item=>item.id === Number(id));
            // se almacena la data de la mascota selecciona en el localStorage
            localStorage.setItem("Mascota", JSON.stringify(info))
            // al hacer click redirecciona a la página de los detalles de la mascota
            window.location.href = "infoMascotaGato.html";
        }
    })
}


