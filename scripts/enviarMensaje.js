import { urlMensajes } from './helpers.js'

let textoChat = document.getElementById('textoChat');

export const enviarMensaje = () => {
    // funcion para sacar la hora actual
    let hora1 = new Date()
    textoChat.addEventListener('change', async (e) => {
        e.preventDefault()
        const mensaje = e.target.value;
        const hora = hora1.getHours()
        const minutos = hora1.getMinutes()
        const objetoMensaje = {
            mensaje,
            hora,
            minutos
        }
        // traigo los datos del mensaje recibido y con el metodo post lo guardo
        await fetch (urlMensajes, { 
            method: 'POST',
            body: JSON.stringify(objetoMensaje),
            headers: {'Content-Type': 'application/json; charset=utf-8'}
        })
    })
}