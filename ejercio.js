//Declara una variable nombre y asígnale tu nomb re. Muestra su valor enconsola.
let Nombre = "Carlos"
console.log (Nombre);

//Declara dos variables edad y ciudad y muéstralas juntas en un soloconsole.log.
let Edad = 18
let Ciudad = "Juigalpa"
console.log (Edad,Ciudad);

//Declara una constante PI con el valor 3.1416 y muéstrala en consola.
const PI = 3.1416
console.log (PI);

//Declara tres variables con valores numéricos y calcula su promedio.
let Numero1 = 45
let Numero2 = 65
let Numero3 = 23


let promedio = (Numero1 + Numero2 + Numero3)/3
console.log("El promedio es :"+ promedio);

//Declara una variable esMayorDeEdad con un valor booleano y muéstrala.
let esMayorDeEdad = true
console.log("El alumno es mayor de edad? "+ esMayorDeEdad);

//Declara dos números y muestra su suma.
let suma = 14
let suma2 = 23

let sumatoria = (suma + suma2)
console.log("La suma es :"+ sumatoria);

//Declara dos números y muestra su resta, multiplicación y división.
let nuemro1 = 23
let nuemro2 = 56

let resta = (nuemro1 - nuemro2)
let multiplicación = (nuemro1 * nuemro2)
let división = (nuemro1 / nuemro2)

console.long("la resta es :"+ resta)
console.long("la multiplicacion es :" + multiplicación)
console.long("la divicion es :" + división)


//Declara dos números y muestra el resultado de elevar el primero al segundo.

let base = 5
let exponente = 3

let resultado = base ** exponente
console.log("El resultado de elevar " + base + " a la " + exponente + " es: " + resultado);

//Declara una variable precio y otra descuento (en %) y calcula el precio final.
let precio = 150
let descuento = 20    
let precioFinal = precio - (precio * descuento / 100)
console.log("El precio final con descuento es: " + precioFinal);

//Usando un for, muestra en consola los números del 1 al 10.

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

//Usando un for, muestra en consola la tabla de multiplicar del 5.
for (let i = 1; i <= 10; i++) {
    console.log("5 x " + i + " = " + (5 * i));
}

//Usando un while, muestra en consola los números pares del 2 al 20.
let num = 2;
while (num <= 20) {
    console.log(num);
    num += 2;
}

//Crea una función saludar que reciba un nombre y muestre un saludo.
function saludar(nombre) {
    console.log("Hola, " + nombre + "!");
}
saludar("Carlos");

//Crea una función sumar que reciba dos números y retorne su suma.
function sumar(a, b) {
    return a + b;
}
let resultadoSuma = sumar(5, 10);
console.log("La suma es: " + resultadoSuma);

//Crea una función esPar que reciba un número y retorne true si es par, false si no lo es.
function esPar(numero) {
    return numero % 2 === 0;
}
console.log(esPar(4)); // true
console.log(esPar(7)); // false

//Crea una función areaRectangulo que reciba base y altura y retorne su área.
function areaRectangulo(base, altura) {
    return base * altura;
}
let area = areaRectangulo(5, 10);
console.log("El área del rectángulo es: " + area);

//Crea una función flecha multiplicar que reciba dos números y retorne su producto.

const multiplicar = (a, b) => a * b;
let producto = multiplicar(4, 5);
console.log("El producto es: " + producto);

//Crea una función flecha convertirCelsiusAFahrenheit que reciba grados Celsius y retorne su equivalente en Fahrenheit.
const convertirCelsiusAFahrenheit = celsius => (celsius * 9/5) + 32;
let fahrenheit = convertirCelsiusAFahrenheit(25);
console.log("25 grados Celsius son " + fahrenheit + " grados Fahrenheit.");

//Crea una función flecha mayorDeDos que reciba dos números y retorne el mayor.
const mayorDeDos = (a, b) => (a > b ? a : b);
let mayor = mayorDeDos(10, 20);
console.log("El mayor es: " + mayor);

//Crea una función flecha calcularIVA que reciba un precio y retorne el precio más IVA (15%).
const calcularIVA = precio => precio * 1.15;
let precioConIVA = calcularIVA(100);
console.log("El precio con IVA es: " + precioConIVA);

//Declara un arreglo con 5 nombres y recórrelo con un for mostrando cada nombre.
let nombres = ["Ana", "Luis", "María", "Juan", "Sofía"];
for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}

//Declara un arreglo con 5 números y usa un for para mostrar solo los números mayores que 10.
let numeros = [5, 12, 8, 20, 3];
for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] > 10) {
        console.log(numeros[i]);
    }
}

//Declara un arreglo con 5 palabras y usa un for para mostrar su longitud (.length).
let palabras = ["JavaScript", "HTML", "CSS", "Python", "Java"];
for (let i = 0; i < palabras.length; i++) {
    console.log(palabras[i] + " tiene " + palabras[i].length + " caracteres.");
}

//Declara un objeto persona con propiedades nombre, edad y ciudad. Usa un for...in para mostrar cada clave y valor.
let persona = {
    nombre: "Carlos",
    edad: 18,
    ciudad: "Juigalpa"
};
for (let clave in persona) {
    console.log(clave + ": " + persona[clave]);
}

//Declara un arreglo de objetos con 3 productos (nombre y precio) y usa un for para mostrar solo los nombres de los productos.
let productos = [
    { nombre: "Laptop", precio: 800 },
    { nombre: "Teléfono", precio: 500 },
    { nombre: "Tablet", precio: 300 }
];
for (let i = 0; i < productos.length; i++) {
    console.log(productos[i].nombre);
}