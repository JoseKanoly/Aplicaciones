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
exports.buscarElementoAsync = buscarElementoAsync;
const data_1 = require("./data");
const callback_1 = require("./callback");
// Función async/await
function buscarElementoAsync() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const programa = yield (0, callback_1.buscarElementoPromesa)(data_1.programas, 4);
            console.log("\nPrograma encontrado (async/await):", programa);
        }
        catch (error) {
            console.error("\nError:", error);
        }
    });
}
