// 1. Crear una función flecha que reciba un arreglo y uno o más elementos, los añada al final del arreglo y devuelva el nuevo arreglo.
const addToEnd = (arr, ...elements) => [...arr, ...elements];

// 2. Crear una función flecha que reciba un arreglo y uno o más elementos, los añada al inicio del arreglo y devuelva el nuevo arreglo.
const addToStart = (arr, ...elements) => [...elements, ...arr];

// 3. Crear una función flecha que reciba un arreglo, elimine y devuelva el último elemento del arreglo.
const removeLastElement = arr => {
const [, ...rest] = arr;
return rest;
};

// 4. Crear una función flecha que reciba un arreglo, elimine y devuelva el primer elemento del arreglo.
const removeFirstElement = arr => arr.slice(1);

// 5. Crear una función flecha que reciba un arreglo, un elemento y opcionalmente un índice de inicio, y devuelva el índice de la primera aparición del elemento o -1 si no lo encuentra.
const findIndex = (arr, element, startIndex = 0) => arr.indexOf(element, startIndex);

// 6. Crear una función flecha que reciba un arreglo y devuelva la cantidad de elementos en el arreglo.
const getLength = arr => arr.length;

// 7. Crear una función flecha que reciba un arreglo de números y los ordene en orden ascendente usando una función comparadora.
const sortAscending = arr => arr.sort((a, b) => a - b);

// 8. Crear una función flecha que reciba un arreglo y un separador, y devuelva una cadena con los elementos del arreglo unidos por el separador.
const joinWithSeparator = (arr, separator) => arr.join(separator);

// 9. Crear una función flecha que reciba uno o más arreglos y/o elementos, y devuelva un nuevo arreglo con todos los elementos combinados.
const concatArrays = (...items) => items.reduce((acc, item) => acc.concat(item), []);

// 10. Crear una función flecha que reciba un arreglo y una función callback, y ejecute la función por cada elemento del arreglo sin devolver un nuevo arreglo.
const forEach = (arr, callback) => arr.forEach(callback);

// 11. Crear una función flecha que reciba un arreglo y una función callback, y devuelva un nuevo arreglo con los resultados de aplicar la función a cada elemento.
const map = (arr, callback) => arr.map(callback);

// 12. Crear una función flecha que reciba un arreglo y una función callback, y devuelva un nuevo arreglo con los elementos que cumplen la condición definida por la función.
const filter = (arr, callback) => arr.filter(callback);

// 13. Crear una función flecha que reciba un arreglo, una función callback y opcionalmente un valor inicial, y reduzca el arreglo a un solo valor aplicando la función acumuladora.
const reduce = (arr, callback, initialValue) => arr.reduce(callback, initialValue);