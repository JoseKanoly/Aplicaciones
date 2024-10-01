
//Te permite convertir codigo asincronico en sincronico, Funcion que se envia luego de haber tenido una respuesta (en ciclo)
//import { GetColegioById, GetEstudianteById } from "./callback";

import { GetColegioByIdaa, GetEstudianteByIdaa } from "./asyncAwait"

// import { IEstudiante, IColegio, Estudiantes,} from "./data";
// import { GetEstudianteByIdUsingPromises, GetColegioByIdUsingPromises } from "./promises";

(async()=>{
    try{
    const estudiante= await GetEstudianteByIdaa(1)
    const colegio= await GetColegioByIdaa(estudiante.colegioID);
    console.log(estudiante, colegio)
    } catch (error){
        console.log(error)
    }
})

// async function main(){
//     const estudiante= await GetEstudianteByIdaa(1)
//     const colegio= await GetColegioByIdaa(estudiante.colegioID);
//     console.log(estudiante, colegio)
// }
// // GetEstudianteById(1, (err, estudiante)=>{
// //     if (err)
// //     {
// //         console.log(err);
// //         return;
// //     }
// //     console.log(estudiante)
// //     GetColegioById(estudiante!.colegioID, (err, Colegio)=>{
// //         if(err)
// //         {
// //             console.log(err)
// //             return;
// //         }
// //         console.log(Colegio)
// //     })
// // })

// GetEstudianteByIdUsingPromises(1)
// .then((estudiante:IEstudiante)=> console.log(estudiante.colegioID))
// .then((colegio:IColegio)=>{return GetColegioByIdUsingPromises(colegio.Nombre)})
// .catch(error=> console.log(error))

