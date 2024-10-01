interface IEstudiante {
    id: number;
    nombre: string;
    edad: number;
    colegioId: number;
}
interface IColegio {
    id: number;
    nombre: string;
    ciudadId: number;
}
interface ICiudad {
    id: number;
    nombre: string;
}

const estudiantes:IEstudiante[] =[
    { id: 1, nombre: 'Marco', edad:1, colegioId: 1},
    { id: 1, nombre: 'Juan', edad:2, colegioId: 2},
]
const colegios:IColegio[]=[
    { id: 1, nombre: 'San Lucas', ciudadId: 1 },
    { id: 2, nombre: 'San Marcos', ciudadId: 2 },
];
const ciudades: ICiudad[] =[
    { id:1, nombre: 'España'},
    { id:2, nombre: 'Francia'},
]
export {
    estudiantes,
    colegios,
    ciudades,
    ICiudad,
    IEstudiante,
    IColegio
}