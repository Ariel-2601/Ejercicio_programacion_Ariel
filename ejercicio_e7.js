// 1. Añadir elementos al final
const agregarAlFinal = (arreglo, ...elementos) => {
    arreglo.push(elementos);
    return arreglo;
};
let numeros = [1, 2, 3];
console.log(agregarAlFinal(numeros, 4)); // [1, 2, 3, 4, 5]

// 2. Añadir elementos al inicio
const agregarAlInicio = (arreglo, ...elementos) => {
    arreglo.unshift(elementos);
    return arreglo;
};
let numeros2 = [1, 2, 3];
console.log(agregarAlInicio(numeros2, 0)); // [0, 1, 2, 3, 4, 5

// 3. Eliminar el último elemento
const eliminarUltimo = (arreglo) => {
    ultimo= arreglo.pop();
    return ultimo;
};

let numeros3 = [1, 2, 3];
console.log(eliminarUltimo(numeros3)); // 3

// 4. Eliminar el primer elemento
const eliminarPrimero = (arreglo) => {
    primero= arreglo.shift();
    return primero;
};

let numeros4 = [1, 2, 3];
console.log(eliminarPrimero(numeros4)); // 1

// 5. Buscar el índice de un elemento
const buscarIndice = (arreglo, elemento) => {
    return arreglo.indexOf(elemento);
};

let numeros5 = [1, 2, 3];
console.log(buscarIndice(numeros5, 2)); // 1

// 6. Contar elementos
const contarElementos = (arreglo) => {
    return arreglo.length;
};

let numeros6 = [1, 2, 3];
console.log(contarElementos(numeros6)); // 3
// 7. Ordenar elementos
const ordenarElementos = (arreglo) => {
    return arreglo.sort((a, b) => a - b);
};

let numeros7 = [3, 1, 2];
console.log(ordenarElementos(numeros7)); // [1, 2, 3]

// 8. Unir elementos
const unirElementos = (arreglo, separador) => {
    return arreglo.join(separador);
};

let palabras = ['Hola', 'mundo'];
console.log(unirElementos(palabras, ' ')); // "Hola mundo"

// 9. Combinar arreglos y elementos
const combinarArreglos = (arreglo1, arreglo2, ...elementos) => {
    return [...arreglo1, ...arreglo2, ...elementos];
};

let numeros8 = [1, 2];
let numeros9 = [3, 4];
console.log(combinarArreglos(numeros8, numeros9, 5, 6)); // [1, 2, 3, 4, 5, 6]

// 10. Ejecutar función sin retorno
const ejecutarSinRetorno = (arreglo, callback) => {
    arreglo.forEach(callback);
};

let numeros10 = [1, 2, 3];
ejecutarSinRetorno(numeros10, (num) => console.log(num * 2)); // 2, 4, 6
// 11. Ejecutar función y devolver resultados
const ejecutarConRetorno = (arreglo, callback) => {
    return arreglo.map(callback);
};

let numeros11 = [1, 2, 3];
console.log(ejecutarConRetorno(numeros11, (num) => num * 2)); // [2, 4, 6]

// 12. Filtrar elementos
const filtrarElementos = (arreglo, callback) => {
    return arreglo.filter(callback);
};

let numeros12 = [1, 2, 3, 4, 5];
console.log(filtrarElementos(numeros12, (num) => num > 2)); // [3, 4, 5]

// 13. Reducir arreglo a un solo valor
const reducirArreglo = (arreglo, callback, valorInicial) => {
    return arreglo.reduce(callback, valorInicial);
};

let numeros13 = [1, 2, 3, 4];
console.log(reducirArreglo(numeros13, (acum, num) => acum + num, 0)); // 10