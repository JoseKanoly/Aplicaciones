"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.operacionMatematica = operacionMatematica;
function operacionMatematica(params) {
    const { a, b, operador } = params;
    let resultado = 0;
    if (operador == "+") {
        resultado = a + b;
    }
    else if (operador == "-") {
        resultado = a - b;
    }
    else if (operador == "*") {
        resultado = a * b;
    }
    else if (operador == "/") {
        resultado = a / b;
    }
    return resultado;
}
