// // import {nombreEstudiantes, operacionMatematica} from './ejemplos'
// // console.log(operacionMatematica({a:1  , b:2 , operador: '+'}))
// // import { nombreEstudiantes } from './ejemplos/ejemplo1'
// // console.log(nombreEstudiantes)
// import { estudiantes} from './ejemplos' 
//      console.log(estudiantes);

import { operacionCallback } from "./ejemplos";

operacionCallback(2, 3, (a, b) => a +b, (resultado) =>{
    console.log(resultado);
})