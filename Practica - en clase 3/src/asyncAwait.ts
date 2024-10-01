
import { ICiudad, IColegio, IEstudiante, Estudiantes, Colegio,Ciudad } from "./data";

async function GetEstudianteByIdaa(id:number)
{
    const estudiante = Estudiantes.find(e=> e.id===id);
    if(!estudiante)
    {
        const error = new Error();
        error.message="No se encontró el estudiante";
        throw error;
    }
    return estudiante
}
async function GetColegioByIdaa(Id:number){
    const colegio = Colegio.find(c=> c.Id===Id);
    if (!colegio)
        throw new Error("No se encontró el colegio")
    return colegio;
}

export{
    GetColegioByIdaa,
    GetEstudianteByIdaa
}