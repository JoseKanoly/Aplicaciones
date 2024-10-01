import { get } from "http";
import { getCiudadById, getColegiosById, getEstudiantesById } from "./callback"
import { ciudades, colegios, estudiantes, IColegio, IEstudiante, ICiudad } from "./data"
import { buscarEstudiantesPromise, buscarColegioPromise, buscarCiudadPromise } from "./promises"
import { getEstudiantesByIdaa } from "./asycAwait";
export { getEstudiantesByIdaa, getColegiosByIdaa } from "./asycAwait"

buscarEstudiantesPromise(1)
    .then((estudiante: IEstudiante) => { return buscarColegioPromise(estudiante.colegioId) })
    .then((colegio: IColegio) => { return buscarCiudadPromise(colegio.ciudadId) })
    .then((ciudad:ICiudad)=> { console.log(ciudad) })
    .catch(error => console.log(error))

getEstudiantesById(1, (err, estudiante) => {
    if (err) {
        console.log(err)
        return;
    }
    console.log(estudiante)

    getColegiosById(estudiante!.colegioId, (err, colegio) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(colegio)
        getCiudadById(colegio!.ciudadId, (err, ciudad) => {
            if (err) {
                console.log(err)
                return;
            }
            console.log(ciudad);
        });
    });
});



// function main(){
//     const estudiante = await getEstudiantesByIdaa(1)
//     const colegio = await buscarColegioPromise(estudiante.colegioId)
//     console.log(estudiante,colegio)
// }

(async()=>{
    try {
        const estudiante = await getEstudiantesByIdaa(1)
        const colegio = await buscarColegioPromise(estudiante.colegioId)
        console.log(estudiante,colegio)
    } catch (error) {
        console.log(error)
    }
})

import {IPost, fetchData} from "./restService"

//b0uscarDeportePromise(1)
//     .then(deporte => {console.log(deporte);return buscarCategoriaPromise(deporte.categoriaId);})
//     .then(categoria => {console.log(categoria);})
//     .catch(error => console.error(error));


