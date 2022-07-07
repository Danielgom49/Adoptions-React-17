//funcion donde se pinta los datos de las mascotas de perros
export const showMascotas1 = (mascota, showG) => {
    mascota.forEach(element1 => {
        const { id, img, nombre, raza} = element1;
        showG.innerHTML += `
        <div id="${id}" class="perro-fondo" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${img}) ;">
            <h3 class="nombre-mascota">${nombre}</h3>
            <h4 class="raza">${raza}</h4>
        </div>
        `
    })
}
//funcion donde se pinta los datos de las mascotas de gatos
export const showMascotas2 = (mascota, showG) => {
    mascota.forEach(element1 => {
        const { id, img, nombre, raza} = element1;
        showG.innerHTML += `
        <div id="${id}" class="gato-fondo" style="background: linear-gradient(180deg, rgba(255, 255, 255, 0) 26.42%, #000000 99.33%), url(${img}) ;">
            <h3 class="nombre-mascota">${nombre}</h3>
            <h4 class="raza">${raza}</h4>
        </div>
        `
    })
}