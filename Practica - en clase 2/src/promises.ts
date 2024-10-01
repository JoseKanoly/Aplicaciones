import { estudiantes, IEstudiante, colegios, IColegio, ICiudad, ciudades } from './data'


function buscarEstudiantesPromise(id: number): Promise<IEstudiante> {
    return new Promise((resolve, reject) => {
        const estudiante = estudiantes.find(estudiante => estudiante.id === id);
        if (estudiante) {
            resolve(estudiante);
        } else {
            const error = new Error('No se encontró el estudiante');
            reject(error);
        }
    });
}
function buscarColegioPromise(id: number): Promise<IColegio> {
    return new Promise((resolve, reject) => {
        const colegio = colegios.find(colegio => colegio.id === id);
        if (colegio) {
            resolve(colegio);
        } else {
            const error = new Error('No se encontró el colegio');
            reject(error);
        }
    });
}

function buscarCiudadPromise(id: number): Promise<ICiudad> {
    return new Promise((resolve, reject) => {
        const ciudad = ciudades.find(ciudad => ciudad.id === id);
        if (ciudad) {
            resolve(ciudad);
        } else {
            const error = new Error('No se encontró la ciudad');
            reject(error);
        }
    });
}
export { buscarEstudiantesPromise, buscarColegioPromise,buscarCiudadPromise }