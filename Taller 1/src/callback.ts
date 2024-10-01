import { Programa } from './data'; 

// Buscar un objeto usando Promises usando un callback
export function buscarElemento(arreglo: Programa[], id: number, callback: (elemento: Programa | undefined) => void): void {
    const elemento = arreglo.find(el => el.id === id);
    callback(elemento);
}

// Buscar un objeto usando Promises
export function buscarElementoPromesa(arreglo: Programa[], id: number): Promise<Programa | undefined> {
    return new Promise((resolve, reject) => {
        const elemento = arreglo.find(el => el.id === id);
        if (elemento) {
            resolve(elemento);
        } else {
            reject('Elemento no encontrado');
        }
    });
}
