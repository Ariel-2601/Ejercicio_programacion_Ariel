const numeros = [1, 2, 3, 4, 5];
const suma = numeros.reduce((acc, num) => acc + num, 0);
console.log(suma); // 15


const productos = [
  { nombre: "Camisa", precio: 20 },
  { nombre: "Pantalón", precio: 30 },
  { nombre: "Zapatos", precio: 50 },
];
const total = productos.reduce((acc, prod) => acc + prod.precio, 0);
console.log(total); // 100

const nombres = ["Ana", "Luis", "Pedro", "María"];
const encontrado = nombres.find((nombre) => nombre.startsWith("P"));
console.log(encontrado); // "Pedro"

const usuarios1 = [
  { id: 1, nombre: "Carlos" },
  { id: 2, nombre: "Lucía" },
  { id: 3, nombre: "Marta" },
];

const usuario = usuarios.find((u) => u.id === 2);
console.log(usuario); // { id: 2, nombre: "Lucía" }

const edades = [18, 22, 30, 25];
const todosMayores = edades.every((edad) => edad >= 18);
console.log(todosMayores); // true

const tareas = [
  { nombre: "Estudiar", completada: true },
  { nombre: "Ejercicio", completada: true },
  { nombre: "Leer", completada: false },
];
const todasCompletas = tareas.every((t) => t.completada === true);
console.log(todasCompletas); // false

const notas = [5, 8, 9, 3];
const hayReprobados = notas.some((nota) => nota < 6);
console.log(hayReprobados); // true

const inventario = [
  { producto: "Manzanas", cantidad: 0 },
  { producto: "Naranjas", cantidad: 10 },
  { producto: "Peras", cantidad: 3 },
];

const agotado = inventario.some((item) => item.cantidad === 0);
console.log(agotado); // true

const empleados = [
  { nombre: "Ana", puesto: "Desarrolladora" },
  { nombre: "Luis", puesto: "Diseñador" },
  { nombre: "Marta", puesto: "Desarrolladora" },
];
const desarrolladores = empleados.filter((e) => e.puesto === "Desarrolladora");
console.log(desarrolladores);
// [
// { nombre: "Ana", puesto: "Desarrolladora" },
// { nombre: "Marta", puesto: "Desarrolladora" }
// ]

const usuarios = [
  { id: 1, nombre: "Ana", salario: 1700},
  { id: 2, nombre: "Luis", salario: 22000},
  { id: 3, nombre: "Marta", salario: 3000 },
  { id: 4, nombre: "Pedro", salario: 1500 },
  { id: 5, nombre: "Sofía", salario: 25000 },
  { id: 6, nombre: "Diego", salario: 40000 },
  { id: 7, nombre: "Carla", salario: 19000 },
  { id: 8, nombre: "Jorge", salario: 33000 },
  { id: 9, nombre: "Lucía", salario: 2800 },
  { id: 10, nombre: "Raúl", salario: 16000 },
  { id: 11, nombre: "Elena", salario: 2100 },
  { id: 12, nombre: "Andrés", salario: 3500 },
];


const unoTienemayorA22 = usuarios.some(u => u.salario > 22000);
console.log(unoTienemayorA22); // true

const todosalariosAltos = usuarios.every(u => u.salario > 20000);
console.log(todosalariosAltos); // true

const usuariosConSalarioAlto = usuarios.find(u => u.salario > 20000 && u.nombre.startsWith('A'));
console.log(usuariosConSalarioAlto); // { id: 2, nombre: "Luis", salario: 22000 });


const personas = [
  { id: 1, nombre: "Ana", edad: 17 },
  { id: 2, nombre: "Luis", edad: 22 },
  { id: 3, nombre: "Marta", edad: 30 },
  { id: 4, nombre: "Pedro", edad: 15 },
  { id: 5, nombre: "Sofía", edad: 25 },
  { id: 6, nombre: "Diego", edad: 40 },
  { id: 7, nombre: "Carla", edad: 19 },
  { id: 8, nombre: "Jorge", edad: 33 },
  { id: 9, nombre: "Lucía", edad: 28 },
  { id: 10, nombre: "Raúl", edad: 16 },
  { id: 11, nombre: "Elena", edad: 21 },
  { id: 12, nombre: "Andrés", edad: 35 }
];




//Obtén un nuevo arreglo con todas las personas cuya edad sea mayor o iguala 18 años.
const mayoresDe18 = personas.filter(p => p.edad >= 18);
console.log(mayoresDe18);
//Encuentra la primera persona en el arreglo cuyo nombre comience con laletra "L".
const personaConL = personas.find(p => p.nombre.startsWith('L'));
console.log(personaConL); // { id: 2, nombre: "Luis", edad: 22 }
//Calcula la suma total de las edades de todas las personas en el arreglo.
const sumaEdades = personas.reduce((acc, p) => acc + p.edad, 0);
console.log(sumaEdades); // 301
//Verifica si todas las personas en el arreglo son mayores o iguales a 15 años.
const todosMayoresOIgualesA15 = personas.every(p => p.edad >= 15);
console.log(todosMayoresOIgualesA15); // true
//Comprueba si existe al menos una persona en el arreglo que tenga 40 años
const hayAlguienDe40 = personas.some(p => p.edad === 40);
console.log(hayAlguienDe40); // true

const palabras = ["sol", "luna", "estrella", "cielo", "mar"];
//Obtén un nuevo arreglo con todas las palabras que tengan más de 3 letras.
const masDe3Letras = palabras.filter(p => p.length > 3);