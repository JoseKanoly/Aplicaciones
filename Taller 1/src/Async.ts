import { programas } from './data';
import { buscarElementoPromesa } from './callback';

// Función async/await
export async function buscarElementoAsync() {
    try {
        const programa = await buscarElementoPromesa(programas, 4);
        console.log("\nPrograma encontrado (async/await):", programa);
    } catch (error) {
        console.error("\nError:", error);
    }
}
