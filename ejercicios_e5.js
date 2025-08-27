
// ejercicios_e5.js
// Ejemplos de Arreglos en JavaScript - Programación Estructurada E5

// 1. Declaración de arreglos
let arreglo1 = [1, 2, 3, "texto", true];
let arreglo2 = new Array(1, 2, 3);
let arreglo3 = [];

// 2. push()
let numeros = [1, 2, 3];
let longitudPush = numeros.push(4, 5);
console.log("push:", numeros, "longitud:", longitudPush);

// 3. unshift()
let letras = ['b', 'c'];
let longitudUnshift = letras.unshift('a');
console.log("unshift:", letras, "longitud:", longitudUnshift);

// 4. pop()
let frutas = ['manzana', 'banana', 'naranja'];
let ultima = frutas.pop();
console.log("pop:", frutas, "eliminado:", ultima);

// 5. shift()
let colores = ['rojo', 'verde', 'azul'];
let primero = colores.shift();
console.log("shift:", colores, "eliminado:", primero);

// 6. indexOf()
let nums = [10, 20, 30, 20, 40];
console.log("indexOf 20:", nums.indexOf(20));
console.log("indexOf 20 desde índice 2:", nums.indexOf(20, 2));

// 7. length
let arreglo = [1, 2, 3];
console.log("length inicial:", arreglo.length);
arreglo.length = 1;
console.log("length truncado:", arreglo);
arreglo.length = 5;
console.log("length extendido:", arreglo);

// 8. sort()
let numerosSort = [3, 1, 4, 2];
numerosSort.sort((a, b) => a - b);
console.log("sort ascendente:", numerosSort);

// 9. join()
let palabras = ['hola', 'mundo'];
let texto = palabras.join(' ');
console.log("join:", texto);

// 10. concat()
let arr1 = [1, 2];
let arr2 = [3, 4];
let combinado = arr1.concat(arr2, [5]);
console.log("concat:", combinado);

// 11. forEach()
let coloresForEach = ['rojo', 'verde', 'azul'];
coloresForEach.forEach(color => console.log("forEach:", color));

// 12. map()
let numerosMap = [1, 2, 3];
let dobles = numerosMap.map(x => x * 2);
console.log("map:", dobles);

// 13. filter()
let numerosFilter = [1, 2, 3, 4];
let pares = numerosFilter.filter(x => x % 2 === 0);
console.log("filter pares:", pares);

// 14. reduce()
let numerosReduce = [1, 2, 3, 4];
let suma = numerosReduce.reduce((acc, curr) => acc + curr, 0);
console.log("reduce suma:", suma);

// 15. some()
let numerosSome = [1, 2, 3, 4];
let hayPares = numerosSome.some(x => x % 2 === 0);
console.log("some hayPares:", hayPares);

// 16. every()
let numerosEvery = [2, 4, 6, 8];
let todosPares = numerosEvery.every(x => x % 2 === 0);
console.log("every todosPares:", todosPares);

// 17. find()
let numerosFind = [1, 2, 3, 4];
let encontrado = numerosFind.find(x => x > 2);
console.log("find:", encontrado);

// 18. findIndex()
let numerosFindIndex = [1, 2, 3, 4];
let indice = numerosFindIndex.findIndex(x => x > 2);
console.log("findIndex:", indice);

// 19. entries()
let coloresEntries = ['rojo', 'verde', 'azul'];
let iteradorEntries = coloresEntries.entries();
console.log("entries:", [...iteradorEntries]);

// 20. keys()
let coloresKeys = ['rojo', 'verde', 'azul'];
let iteradorKeys = coloresKeys.keys();
console.log("keys:", [...iteradorKeys]);

// 21. values()
let coloresValues = ['rojo', 'verde', 'azul'];
let iteradorValues = coloresValues.values();
console.log("values:", [...iteradorValues]);
