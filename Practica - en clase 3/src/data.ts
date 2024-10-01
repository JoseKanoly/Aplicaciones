
interface IEstudiante{
    id: number;
    Nombre: String;
    edad: number;
    colegioID: number;
}

interface IColegio{
    Id: number;
    Nombre: String;
    CiudadId: number;
}

interface ICiudad{
    Id: number;
    Nombre: String;
}

const Estudiantes:IEstudiante[]=[
    {
       id: 1,
       Nombre: "Andres",
       edad: 22,
       colegioID: 1

    },
    {
        id:2,
        Nombre: "Juan",
        edad: 20,
        colegioID: 2
    },
    {
        id:3,
        Nombre: "Jordi",
        edad: 20,
        colegioID: 3
    }
]

const Colegio:IColegio[]=[
    {
        Id: 1,
        Nombre: "Colegio 1",
        CiudadId: 1
    },
    {
        Id:2,
        Nombre: "Colegio 2",
        CiudadId: 2
    },
    {
        Id: 3,
        Nombre: "Colegio 3",
        CiudadId: 3
    }
]

const Ciudad:ICiudad[]=[
    {
        Id: 1,
        Nombre: "Manta"
    },
    {
        Id: 2,
        Nombre: "Guayaquil"
    },
    {
        Id:3,
        Nombre: "Quito"
    }
]

export {
    IEstudiante,
    IColegio,
    ICiudad,
    Estudiantes,
    Colegio,
    Ciudad
}