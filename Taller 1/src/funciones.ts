import { canales, programas, guias } from './data';

// Mostrar la lista de canales
export function mostrarCanales() {
    console.log("Lista de canales:");
    canales.forEach(canal => {
        console.log(`ID: ${canal.id}, Nombre: ${canal.nombre}`);
    });
}

// Mostrar la lista de programas
export function mostrarProgramas() {
    console.log("\nLista de programas:");
    for (const programa of programas) {
        console.log(`ID: ${programa.id}, Nombre: ${programa.nombre}, Categoría: ${programa.categoria}, Tipo: ${programa.tipo}`);
    }
}

// Mostrar la lista de guías
export function mostrarGuias() {
    console.log("\nLista de guías:");
    for (const indice in guias) {
        const guia = guias[indice];
        console.log(`Guía ID: ${guia.id}, Canal ID: ${guia.canalId}, Programa ID: ${guia.programaId}, Fecha: ${guia.fecha}, Hora: ${guia.hora}, Rating: ${guia.rating}`);
    }
}
