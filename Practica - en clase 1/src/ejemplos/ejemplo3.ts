interface INota {
    materia: string;
    nota: number;
}
interface IDireccion {
    calle: string;
    numero: number;
}
interface IEstudiante {
    nombre: string;
    edad: number;
    direcciones: IDireccion[];
    notas: INota[];
}


const estudiantes: IEstudiante[] = [
{    
    nombre: 'Juan',
    edad: 20,
    direcciones:[
        {
            calle: 'Calle 1',
            numero: 1
        }
    ],
    notas:[
        {
            materia: 'Matemáticas',
            nota: 4
        }
    ]
},
{    
    nombre: 'Jordy',
    edad: 20,
    direcciones:[
        {
            calle: 'Calle 14',
            numero: 2
        }
    ],
    notas:[
        {
            materia: 'Matemáticas',
            nota: 8
        }
    ]
}
]

export{
    estudiantes,
    IEstudiante,
    IDireccion,
    INota
}