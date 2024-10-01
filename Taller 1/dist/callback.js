"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarElemento = buscarElemento;
exports.buscarElementoPromesa = buscarElementoPromesa;
// Buscar un objeto usando Promises usando un callback
function buscarElemento(arreglo, id, callback) {
    const elemento = arreglo.find(el => el.id === id);
    callback(elemento);
}
// Buscar un objeto usando Promises
function buscarElementoPromesa(arreglo, id) {
    return new Promise((resolve, reject) => {
        const elemento = arreglo.find(el => el.id === id);
        if (elemento) {
            resolve(elemento);
        }
        else {
            reject('Elemento no encontrado');
        }
    });
}
