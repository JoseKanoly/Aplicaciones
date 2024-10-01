"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCiudadById = getCiudadById;
exports.getEstudiantesById = getEstudiantesById;
exports.getColegiosById = getColegiosById;
const data_1 = require("./data");
function getEstudiantesById(id, callback) {
    const estudiante = data_1.estudiantes.find(e => e.id === id);
    if (!data_1.estudiantes) {
        const error = new Error("No se ha encontrado estudiante");
        callback(error);
    }
    callback(null, estudiante);
}
function getColegiosById(id, callback) {
    const colegio = data_1.colegios.find(e => e.id === id);
    if (!data_1.colegios) {
        const error = new Error("No se ha encontrado colegio");
        callback(error);
    }
    callback(null, colegio);
}
function getCiudadById(id, callback) {
    const ciudad = data_1.ciudades.find(e => e.id === id);
    if (!data_1.ciudades) {
        const error = new Error("No se ha encontrado ciudad");
        callback(error);
    }
    callback(null, ciudad);
}
