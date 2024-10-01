"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarEstudiantesPromise = buscarEstudiantesPromise;
exports.buscarColegioPromise = buscarColegioPromise;
const data_1 = require("./data");
function buscarEstudiantesPromise(id) {
    return new Promise((resolve, reject) => {
        const estudiante = data_1.estudiantes.find(estudiante => estudiante.id === id);
        if (estudiante) {
            resolve(estudiante);
        }
        else {
            const error = new Error('No se encontró el estudiante');
            reject(error);
        }
    });
}
function buscarColegioPromise(id) {
    return new Promise((resolve, reject) => {
        const colegio = data_1.colegios.find(colegio => colegio.id === id);
        if (colegio) {
            resolve(colegio);
        }
        else {
            const error = new Error('No se encontró el colegio');
            reject(error);
        }
    });
}
