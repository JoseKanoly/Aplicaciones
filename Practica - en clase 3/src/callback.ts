
import {ICiudad, IColegio, IEstudiante, Estudiantes, Ciudad, Colegio} from './data'

function GetEstudianteById( id: number, callback:(err:Error|null, estudiante?:IEstudiante)=>void){
    const estudiante = Estudiantes.find(e=>e.id===id);
    if(!estudiante){
        const error = new Error("Estudiante no encontrado");
        callback(error);
    }
    callback(null,estudiante);
}

function GetColegioById( Id: number, callback:(err:Error|null, Colegio?:IColegio)=>void){
    const colegio = Colegio.find(c=>c.Id===Id);
    if(!colegio){
        const error= new Error("Colegio no encontrado");
        callback(error);
    }
    callback(null, colegio);
}

export{
    GetColegioById,
    GetEstudianteById
}