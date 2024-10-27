// Variables necesarias
let operations = [];

// Función para capturar entradas
function captureInput() {
    let operation = prompt("¿Qué operación deseas realizar? (suma, resta, multiplicación, división, concatenación, porcentaje)");
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));

    return { operation, num1, num2 };
}

// Funciones para realizar operaciones
function sum(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        alert("No se puede dividir entre cero.");
        return null;
    }
    return a / b;
}

function concatenate(str1, str2) {
    return str1 + str2;
}

function percentage(a, b) {
    return (a * b) / 100;
}

// Función principal que simula el proceso
function calculate() {
    let { operation, num1, num2 } = captureInput();

    let result;
    switch (operation.toLowerCase()) {
        case 'suma':
            result = sum(num1, num2);
            break;
        case 'resta':
            result = subtract(num1, num2);
            break;
        case 'multiplicación':
            result = multiply(num1, num2);
            break;
        case 'división':
            result = divide(num1, num2);
            break;
        case 'concatenación':
            result = concatenate(num1.toString(), num2.toString());
            break;
        case 'porcentaje':
            result = percentage(num1, num2);
            break;
        default:
            alert("Operación no válida.");
            return;
    }

    alert("El resultado de la operación es: " + result);
    operations.push({ operation, num1, num2, result }); // Guardamos la operación
}

// Método de búsqueda y filtrado sobre el Array
function filterOperations(searchTerm) {
    return operations.filter(op => op.operation.includes(searchTerm));
}

// Evento para iniciar la calculadora
document.getElementById('start').addEventListener('click', calculate);