import { mostrarCanales, mostrarProgramas, mostrarGuias } from './funciones';
import { buscarElemento } from './callback';
import { buscarElementoAsync } from './Async';
import { obtenerDatosExterno } from './obtenerDatosExterno';
import { programas } from './data';

// Mostrar listas
mostrarCanales();
mostrarProgramas();
mostrarGuias();

// Buscar un programa por ID y mostrarlo
buscarElemento(programas, 3, (programa) => {
    if (programa) {
        console.log("\nPrograma encontrado:", programa);
    } else {
        console.log("\nPrograma no encontrado");
    }
});

// Buscar un programa con async/await
buscarElementoAsync();

// Obtener datos externos
obtenerDatosExterno();
