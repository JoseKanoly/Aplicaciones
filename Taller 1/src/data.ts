export interface Canal {
    id: number;
    nombre: string;
}

export interface Programa {
    id: number;
    nombre: string;
    categoria: string;
    tipo: string;
}

export interface Guia {
    id: number;
    canalId: number;
    programaId: number;
    fecha: string;
    hora: string;
    rating: number;
}

// Arreglo de canales
export const canales: Canal[] = [
    { 
        id: 1, 
        nombre: 'Canal 1' 
    },
    
    { 
        id: 2, 
        nombre: 'Canal 2' 
    },

    { 
        id: 3, 
        nombre: 'Canal 3' 
    
    },
    
    { 
        id: 4, 
        nombre: 'Canal 4' 
    },

    { 
        id: 5, 
        nombre: 'Canal 5' 
    }
];

// Arreglo de programas
export const programas: Programa[] = [
    { 
        id: 1, 
        nombre: 'Programa 1', 
        categoria: 'Noticias', 
        tipo: 'Directo' 
    },

    { 
        id: 2, 
        nombre: 'Programa 2', 
        categoria: 'Deportes', 
        tipo: 'Grabado' 
    },

    { 
        id: 3, 
        nombre: 'Programa 3', 
        categoria: 'Entretenimiento', 
        tipo: 'Directo' 
    },      

    { 
        id: 4, 
        nombre: 'Programa 4', 
        categoria: 'Documental', 
        tipo: 'Grabado' 
    },

    { 
        id: 5, 
        nombre: 'Programa 5', 
        categoria: 'Película', 
        tipo: 'Directo'
     }
];

// Arreglo de guías
export const guias: Guia[] = [
    
    { 
        id: 1, 
        canalId: 1, 
        programaId: 1, 
        fecha: '2024-09-11', 
        hora: '08:00', 
        rating: 4.5 
    },
    
    { 
        id: 2, 
        canalId: 2, 
        programaId: 2, 
        fecha: '2024-09-11', 
        hora: '09:00', 
        rating: 4.8
    },

    { 
        id: 3, 
        canalId: 3, 
        programaId: 3, 
        fecha: '2024-09-11', 
        hora: '10:00', 
        rating: 4.2
    },

    {
         id: 4, 
         canalId: 4, 
         programaId: 4, 
         fecha: '2024-09-11', 
         hora: '11:00', 
         rating: 4.7 
    },

    { 
        id: 5, 
        canalId: 5, 
        programaId: 5, 
        fecha: '2024-09-11', 
        hora: '12:00', 
        rating: 5.0 }
];

