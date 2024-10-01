"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarCanales = mostrarCanales;
exports.mostrarProgramas = mostrarProgramas;
exports.mostrarGuias = mostrarGuias;
const data_1 = require("./data");
// Mostrar la lista de canales
function mostrarCanales() {
    console.log("Lista de canales:");
    data_1.canales.forEach(canal => {
        console.log(`ID: ${canal.id}, Nombre: ${canal.nombre}`);
    });
}
// Mostrar la lista de programas
function mostrarProgramas() {
    console.log("\nLista de programas:");
    for (const programa of data_1.programas) {
        console.log(`ID: ${programa.id}, Nombre: ${programa.nombre}, Categoría: ${programa.categoria}, Tipo: ${programa.tipo}`);
    }
}
// Mostrar la lista de guías
function mostrarGuias() {
    console.log("\nLista de guías:");
    for (const indice in data_1.guias) {
        const guia = data_1.guias[indice];
        console.log(`Guía ID: ${guia.id}, Canal ID: ${guia.canalId}, Programa ID: ${guia.programaId}, Fecha: ${guia.fecha}, Hora: ${guia.hora}, Rating: ${guia.rating}`);
    }
}
