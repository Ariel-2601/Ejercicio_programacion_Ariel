
// Arreglo de numeros
let numeros = [5, 2, 9, 1, 7];

//Orden ascendente 
numeros.sort((a,b) => a - b);
console.log(numeros);

// Orden descendente
numeros.sort((a,b) => b - a);
console.log(numeros);

// Arreglo de cadenas
let frutas = ['manzana', 'naranja', 'plátano', 'kiwi', 'pera'];
frutas.sort();
console.log(frutas);

//Orden alfabetico inverso  
frutas.sort((a,b) => b.localeCompare(a));
console.log(frutas);         

let personas = [
  { nombre: 'Juan', edad: 25 },
  { nombre: 'Ana', edad: 22 },
  { nombre: 'Pedro', edad: 30 },
  { nombre: 'María', edad: 28 }
]; 

// Ordenar por edad ascendente
personas.sort((a,b) => a.edad - b.edad);
console.log(personas);

// Ordenar por nombre alfabeticamente
personas.sort((a,b) => a.nombre.localeCompare(b.nombre));
console.log(personas);

let numero = [5, 2, 9, 1, 7];
numero.reverse();
console.log(numero); // [7, 1, 9, 2, 5]

let palabras = [ "hola", "mundo", "javascript"];
palabras.reverse();
console.log(palabras); // ["javascript", "mundo", "hola"]

let calificacines = [
  {estudiante: "Eliad" , asignatura: "matematicas", calificacion: 90},
  {estudiante: "Xiomara",  asignatura: "Historia", calificacion: 85},
  {estudiante: "Camilo", asignatura: "Fisica", calificacion: 95},
  {estudiante: "Ramiro", asignatura: "Quimica", calificacion: 80},
  {estudiante: "Ana", asignatura: "Español", calificacion: 88}
];

//orden inverso alfabetico por asignatura
calificacines.sort((a,b) => b.asignatura.localeCompare(a.asignatura));
console.log(calificacines);

//orden decendente de calificaciones
calificacines.sort((a,b) => b.calificacion - a.calificacion);
console.log(calificacines);