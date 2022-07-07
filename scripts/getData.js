// importo todas las url para implementar la funcion fetch la cual se almacena en una constante y asi mismo retonarla
import { urlPerros, urlGatos, urlUsuarios, urlFavoritos, urlMensajes } from './helpers.js'

export const getPerros = async () => {
    const resp = await fetch(urlPerros);
    const data = await resp.json();
    return data
}
export const getGatos = async () => {
    const resp = await fetch(urlGatos);
    const data = await resp.json();
    return data
}
export const usuarios = async () => {
    const resp = await fetch(urlUsuarios);
    const data = await resp.json();
    return data
}
export const favoritos = async () => {
    const resp = await fetch(urlFavoritos);
    const data = await resp.json();
    return data
}
export const mensajes = async () => {
    const resp = await fetch(urlMensajes);
    const data = await resp.json();
    return data
}