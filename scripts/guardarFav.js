let favorito = document.getElementById('favorito')
import { urlFavoritos } from './helpers.js';
import { getPerros } from './getData.js';
import { getGatos } from './getData.js';

export const guardarFav = async() =>{
    // almaceno la data de perros y gatos
    const perros = await getPerros();
    const gatos = await getGatos();
    // con el evento click se almacena las mascotas favoritas
    favorito.addEventListener('click', async (e) => {
        let imgFav = '../images/iconoFavSeleccionado.png'
        clickFav.setAttribute('src',imgFav)
        e.preventDefault();
        const botonFavPerro = e.target.classList.contains('clickFavPerro');
        const botonFavGato = e.target.classList.contains('clickFavGato');
        // condicional que identifica si hace click en el botón y así mismo cumplir la función
        if (botonFavPerro) {
            // si se cumple la condición se trae la data que está alojada en el localStorage y se recorre
            const mascota = JSON.parse(localStorage.getItem('Mascota'))
            mascota.forEach(element=>{
                const { nombre,img, raza } = element;
                const objetoFavoritos1 = {
                    nombre,
                    img,
                    raza,
                };
                let nomRepetido1 = nombre.toLowerCase();
                let verificacion1 = perros.filter(item => item.nombre.toLowerCase() === nomRepetido1)
                // se hace una verificación para saber si el perro aún no pertenece a favoritos
                if (verificacion1 != 0) {
                    fetch(urlFavoritos, {
                        method: 'POST', 
                        body: JSON.stringify(objetoFavoritos1),
                        headers: {'Content-Type': 'application/json; charset=utf-8'}
                    })
                }
                else{
                    console.log('ya existe');
                }           
            })
        }
            // si se cumple la condición se trae la data que está alojada en el localStorage y se recorre
            else if( botonFavGato){
            const mascota = JSON.parse(localStorage.getItem('Mascota'))
            mascota.forEach(element=>{
                const {id, nombre,img, raza } = element;
                const objetoFavoritos2 = {
                    nombre,
                    img,
                    raza
                };
                let nomRepetido2 = nombre.toLowerCase();
                let verificacion2 = gatos.filter(item => item.nombre.toLowerCase() === nomRepetido2)
                // se hace una verificación para saber si el gato aún no pertenece a favoritos
                if (verificacion2 != 0) {
                   fetch(urlFavoritos, {
                        method: 'POST', 
                        body: JSON.stringify(objetoFavoritos2),
                        headers: {'Content-Type': 'application/json; charset=utf-8'}
                    })                   
                }
                else{
                    console.log('ya existe');
                }
            })
        }
    })
}