import { estudiantes, IEstudiante, colegios, IColegio } from './data'


async function getEstudiantesByIdaa(id:number){
    const estudiante = estudiantes.find(estudiante => estudiante.id === id);
    if (!estudiante) {
        throw new Error('No se encontró el estudiante');
    }
    return estudiante;
}
async function getColegiosByIdaa(id:number){
    const colegio = colegios.find(colegio => colegio.id === id);
    if (!colegio) {
        throw new Error('No se encontró el colegio');
    }
    return colegio;
}


export { getEstudiantesByIdaa, getColegiosByIdaa }