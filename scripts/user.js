import { urlUsuarios } from './helpers.js';
import { usuarios } from './getData.js';

const form = document.getElementById('form');
let nameUser = document.getElementById('nameUser')
let imgUser = document.getElementById('imgUser')

// funcion para mostrar lo datos del usuario
export const user = async () => {
    // almacenamos la data de los usuarios en una constante y se recorre para pintar lo datos en el DOM
    const data = await usuarios();
        data.forEach(user => {
            const { id, name, lastname, img, email } = user;
            imgUser.setAttribute('src', img)
            nameUser.textContent = `${name} ${lastname}`;
            document.getElementById('id').value = id;
            document.getElementById('name').value = name;
            document.getElementById('lastname').value = lastname;
            document.getElementById('email').value = email;    

        })
        // evento submit para actualizar lo datos
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const editar = datos(); //funcion que retorna el objeto de los datos
            const id = document.getElementById('id').value;
            await fetch(urlUsuarios+id, {
                method:'PUT',
                body: JSON.stringify(editar),
                headers:{
                    "Content-Type": "application/json; charset=UTF-8"
                }
            })
        })
}
const datos = () => {
    let name = document.getElementById('name').value;
    let lastname = document.getElementById('lastname').value;
    let email = document.getElementById('email').value;    
    const img = '../images/Ellipse 10.png';
    const objeto = {
        name,
        lastname,
        img,
        email
    }
    localStorage.setItem("Perfil", JSON.stringify(objeto));
    return objeto;
}