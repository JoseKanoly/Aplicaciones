import { waitForDebugger } from "inspector";
import { estudiantes, colegios, ciudades, ICiudad, IEstudiante, IColegio } from"./data"

function getEstudiantesById(id: number , 
    callback: (error: Error | null, estudiantes?: IEstudiante) => void) {
    const estudiante = estudiantes.find(e => e.id === id);
    if (!estudiantes) {
        const error = new Error("No se ha encontrado estudiante");
        callback(error);

    }
    callback(null,estudiante);
}

function getColegiosById(id: number , 
    callback: (error: Error | null, colegios?: IColegio) => void) {
    const colegio = colegios.find(e => e.id === id);
    if (!colegios) {
        const error = new Error("No se ha encontrado colegio");
        callback(error);

    }
    callback(null,colegio);
}



function getCiudadById(id: number , 
    callback: (error: Error | null, ciudades?: ICiudad) => void) {
    const ciudad = ciudades.find(e => e.id === id);
    if (!ciudades) {
        const error = new Error("No se ha encontrado ciudad");
        callback(error);

    }
    callback(null,ciudad);
}




export{
    getCiudadById,
    getEstudiantesById,
    getColegiosById,
}
