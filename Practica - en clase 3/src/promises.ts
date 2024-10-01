
import { ICiudad, IColegio, IEstudiante, Estudiantes, Colegio, Ciudad } from "./data";

function GetEstudianteByIdUsingPromises(id:number):Promise<IEstudiante>{
    return new Promise((resolve, reject)=>{
        const estudiante= Estudiantes.find(e=> e.id===id);
        if (!estudiante)
        {
            const error = new Error("Estudiante no encontrado");
            reject(error)
        }
        resolve(estudiante!)
    })
}

function GetColegioByIdUsingPromises(Id:number):Promise<IColegio>{
    return new Promise((resolve, reject)=>{
        const colegio= Colegio.find(c=> c.Id===Id);
        if(!colegio)
        {
            const error = new Error("Colegio no encontrado");
            reject(error)
        }
        resolve(colegio!)
    })
}

export{
    GetColegioByIdUsingPromises,
    GetEstudianteByIdUsingPromises
}