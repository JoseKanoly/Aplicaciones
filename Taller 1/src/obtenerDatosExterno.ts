// Consumiendo un servicio REST con Fetch y async/await
export async function obtenerDatosExterno() {
    try {
        const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts?lang=es');
        const datos = await respuesta.json();
        console.log("\nDatos obtenidos del servicio REST:", datos.slice(0, 5)); // Mostramos solo los primeros 5 resultados
    } catch (error) {
        console.error("\nError al obtener datos del servicio REST:", error);
    }
}

