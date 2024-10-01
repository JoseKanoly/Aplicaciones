"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const callback_1 = require("./callback");
const promises_1 = require("./promises");
(0, promises_1.buscarEstudiantesPromise)(1)
    .then((estudiante) => console.log(estudiante))
    .catch(error => console.log(error));
(0, callback_1.getEstudiantesById)(1, (err, estudiante) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(estudiante);
    (0, callback_1.getColegiosById)(estudiante.colegioId, (err, colegio) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log(colegio);
        (0, callback_1.getCiudadById)(colegio.ciudadId, (err, ciudad) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(ciudad);
        });
    });
});
