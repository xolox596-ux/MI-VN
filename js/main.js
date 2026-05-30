function mostrarRegion(region){

    const panel = document.getElementById("panel-region");

    const regiones = {

        hielo: {
            nombre: "Reino de Hielo",
            descripcion: "Tierras eternamente congeladas."
        },

        amazonas: {
            nombre: "Tribu Amazona",
            descripcion: "Guerreras que dominan la selva."
        },

        demonios: {
            nombre: "Dominio Demoníaco",
            descripcion: "Hogar de súcubos y demonios."
        },

        centro: {
            nombre: "Reino Central",
            descripcion: "Capital de Aerdan."
        },

        orcos: {
            nombre: "Clanes Orcos",
            descripcion: "Tierras de guerreros salvajes."
        },

        bestias: {
            nombre: "Hombres Bestia",
            descripcion: "Felinos y cazadores legendarios."
        },

        desconocido: {
            nombre: "Territorios Ocultos",
            descripcion: "Regiones aún no exploradas."
        }

    };

    panel.innerHTML = `
        <h2>${regiones[region].nombre}</h2>
        <p>${regiones[region].descripcion}</p>
    `;
}
