"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const funciones_1 = require("./funciones");
const callback_1 = require("./callback");
const Async_1 = require("./Async");
const obtenerDatosExterno_1 = require("./obtenerDatosExterno");
const data_1 = require("./data");
// Mostrar listas
(0, funciones_1.mostrarCanales)();
(0, funciones_1.mostrarProgramas)();
(0, funciones_1.mostrarGuias)();
// Buscar un programa por ID y mostrarlo
(0, callback_1.buscarElemento)(data_1.programas, 3, (programa) => {
    if (programa) {
        console.log("\nPrograma encontrado:", programa);
    }
    else {
        console.log("\nPrograma no encontrado");
    }
});
// Buscar un programa con async/await
(0, Async_1.buscarElementoAsync)();
// Obtener datos externos
(0, obtenerDatosExterno_1.obtenerDatosExterno)();
