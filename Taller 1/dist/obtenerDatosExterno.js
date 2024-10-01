"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDatosExterno = obtenerDatosExterno;
// Consumiendo un servicio REST con Fetch y async/await
function obtenerDatosExterno() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const respuesta = yield fetch('https://jsonplaceholder.typicode.com/posts?lang=es');
            const datos = yield respuesta.json();
            console.log("\nDatos obtenidos del servicio REST:", datos.slice(0, 5)); // Mostramos solo los primeros 5 resultados
        }
        catch (error) {
            console.error("\nError al obtener datos del servicio REST:", error);
        }
    });
}
