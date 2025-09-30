const mascotas = [
    { nombre: "Luna", edad: 3, tipo: "Perro", peso: 10.5 },
    { nombre: "Max", edad: 5, tipo: "Gato", peso: 4.2 },
    { nombre: "Coco", edad: 1, tipo: "Conejo", peso: 2.3 },
    { nombre: "Rocky", edad: 7, tipo: "Perro", peso: 15.8 },
    { nombre: "Milo", edad: 2, tipo: "Gato", peso: 3.9 },
    { nombre: "Bella", edad: 4, tipo: "Perro", peso: 8.7 },
    { nombre: "Toby", edad: 6, tipo: "Conejo", peso: 2.8 },
    { nombre: "Simba", edad: 3, tipo: "Gato", peso: 5.1 },
    { nombre: "Nala", edad: 2, tipo: "Perro", peso: 12.4 },
    { nombre: "Oreo", edad: 5, tipo: "Gato", peso: 4.8 },
    { nombre: "Daisy", edad: 1, tipo: "Conejo", peso: 1.9 },
    { nombre: "Zeus", edad: 8, tipo: "Perro", peso: 20.1 },
    { nombre: "Mimi", edad: 4, tipo: "Gato", peso: 4.5 },
    { nombre: "Bunny", edad: 3, tipo: "Conejo", peso: 2.5 },
    { nombre: "Thor", edad: 6, tipo: "Perro", peso: 18.3 }
];

//Ordenar las mascotas por  de forma ascendente usando sort.
mascotas.sort((a, b) => a.edad - b.edad);
console.log(mascotas);

//Ordenar las mascotas por  de forma alfabética usando sort.
mascotas.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log(mascotas);

//Ordenar las mascotas por  de forma descendente usando sort.
mascotas.sort((a, b) => b.peso - a.peso);
console.log(mascotas);

//Ordenar las mascotas por  alfabéticamente y, si tienen el mismo tipo, por  ascendente usando sort.
mascotas.sort((a, b) => {
    if (a.tipo === b.tipo) {
        return a.edad - b.edad;
    }
    return a.tipo.localeCompare(b.tipo);
});
console.log(mascotas);

//Invertir el orden del arreglo de mascotas usando reverse.
mascotas.reverse();
console.log(mascotas);

//Crear un nuevo arreglo con los nombres de las mascotas en mayúsculas usando map.
const nombresMayusculas = mascotas.map(mascota => mascota.nombre.toUpperCase());
console.log(nombresMayusculas);

//Calcular el peso total de todas las mascotas usando reduce.
const pesoTotal = mascotas.reduce((total, mascota) => total + mascota.peso, 0);
console.log("Peso total de todas las mascotas:", pesoTotal);

//Crear un nuevo arreglo con solo las mascotas que son perros usando filter.
const perros = mascotas.filter(mascota => mascota.tipo === "Perro");
console.log(perros);