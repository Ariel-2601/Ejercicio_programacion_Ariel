// Definición de un arreglo
let arreglo = [1, 2, 3, "texto", true];
let arreglo2 = new Array(1, 2, 3);
let arregloVacio = [];

// Métodos de los arreglos

// push(): Añade uno o más elementos al final del arreglo
let numeros = [1, 2, 3];
let longitud = numeros.push(4, 5);
console.log(numeros); // [1, 2, 3, 4, 5]
console.log(longitud); // 5

// unshift(): Añade uno o más elementos al inicio del arreglo
let letras = ['b', 'c'];
longitud = letras.unshift('a');
console.log(letras); // ['a', 'b', 'c']
console.log(longitud); // 3

// pop(): Elimina y devuelve el último elemento del arreglo
let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log(frutas); // ['manzana', 'banana']
console.log(ultima); // 'naranja'

// shift(): Elimina y devuelve el primer elemento del arreglo
let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log(colores); // ['verde', 'azul']
console.log(primero); // 'rojo'

// indexOf(elemento, [inicio]): Busca un elemento en el arreglo
numeros = [10, 20, 30, 20, 40];
let indice1 = numeros.indexOf(20); // 1
let indiceDesde2 = numeros.indexOf(20, 2); // 3
console.log(indice1); // 1
console.log(indiceDesde2); // 3

// length: Propiedad que devuelve la cantidad de elementos en el arreglo
arreglo = [1, 2, 3];
console.log(arreglo.length); // 3
arreglo.length = 1; // Trunca a [1]
arreglo.length = 5; // Extiende a [1, undefined, undefined, undefined, undefined]

// sort([comparador]): Ordena los elementos del arreglo
numeros = [3, 1, 4, 2];
numeros.sort((a, b) => a - b); // Orden ascendente
console.log(numeros); // [1, 2, 3, 4]

// join(separador): Convierte todos los elementos del arreglo en una cadena
let palabras = ['hola', 'mundo'];
let texto = palabras.join(' '); // 'hola mundo'

// concat(arreglo1, arreglo2, ...): Une dos o más arreglos
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]);
console.log(combinado); // [1, 2, 3, 4, 5]

// forEach(callback): Ejecuta una función por cada elemento del arreglo
colores = ['rojo', 'verde', 'azul'];
colores.forEach(color => console.log(color)); // Imprime: rojo, verde, azul

// map(callback): Crea un nuevo arreglo aplicando una función a cada elemento
numeros = [1, 2, 3];
let dobles = numeros.map(x => x * 2);
console.log(dobles); // [2, 4, 6]

// filter(callback): Crea un nuevo arreglo con los elementos que pasan una condición
numeros = [1, 2, 3, 4];
let pares = numeros.filter(x => x % 2 === 0);
console.log(pares); // [2, 4]

// reduce(callback, [valorInicial]): Reduce el arreglo a un solo valor
numeros = [1, 2, 3, 4];
let suma = numeros.reduce((acc, curr) => acc + curr, 0);
console.log(suma); // 10

// some(callback): Devuelve true si al menos un elemento cumple la condición
numeros = [1, 2, 3, 4];
let hayPares = numeros.some(x => x % 2 === 0);
console.log(hayPares); // true

// every(callback): Devuelve true si todos los elementos cumplen la condición
numeros = [2, 4, 6, 8];
let todosPares = numeros.every(x => x % 2 === 0);
console.log(todosPares); // true

// find(callback): Devuelve el primer elemento que cumple la condición
numeros = [1, 2, 3, 4];
let encontrado = numeros.find(x => x > 2);
console.log(encontrado); // 3

// findIndex(callback): Devuelve el índice del primer elemento que cumple la condición
numeros = [1, 2, 3, 4];
let indice = numeros.findIndex(x => x > 2);
console.log(indice); // 2

// entries(): Devuelve un iterador de los índices y valores del arreglo
colores = ['rojo', 'verde', 'azul'];
let iterador = colores.entries();
console.log([...iterador]); // [[0, 'rojo'], [1, 'verde'], [2, 'azul']]

// keys(): Devuelve un iterador de los índices del arreglo
iterador = colores.keys();
console.log([...iterador]); // [0, 1, 2]

// values(): Devuelve un iterador de los valores del arreglo
iterador = colores.values();
console.log([...iterador]); // ['rojo', 'verde', 'azul']


let arreglo3 = new Array(1,2,3);

let arreglo4 = []

let arreglo5 = [{},{},{}];

let arreglo6 = [{"nombre": "carlos"},{},{}]

let arreglo7 = [[{},{}],["A",1,2,3],[true,false]];