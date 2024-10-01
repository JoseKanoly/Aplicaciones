"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.guias = exports.programas = exports.canales = void 0;
// Arreglo de canales
exports.canales = [
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
exports.programas = [
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
exports.guias = [
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
        rating: 5.0
    }
];
