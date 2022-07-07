import { mensajes } from './getData.js';
import { enviarMensaje } from './enviarMensaje.js';

const misMensajes = document.getElementById('misMensajes');
let texto = document.createElement('div');
document.addEventListener('DOMContentLoaded', async (e) => {
    //llamo la función enviarMensajes para que se ejecute
    enviarMensaje();
    // guardo la data de mensajes para mostrarla en el chat
    const data = await mensajes();
    console.log(data);
    data.forEach(element => {
        const {mensaje, hora, minutos} = element;
        texto.innerHTML += `
        <div class="envio-mensaje">
            <p class="hora-envio-mensaje">${hora}:${minutos}</p>
            <div class="div-text-envio">
                <p clas="text-mensaje-envio">${mensaje}</p>
            </div>
        </div>
        `
        misMensajes.appendChild(texto);
    });
})