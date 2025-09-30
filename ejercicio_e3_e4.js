const universidad = {
  nombre: "Universidad Central",
  ubicacion: {
    ciudad: "Sevilla",
    direccion: {
      calle: "Av. Principal",
      numero: 123
    }
  },
  facultades: [
    {
      nombre: "Ingeniería",
      carreras: [
        {
          nombre: "Informática",
          estudiantes: [
            { nombre: "Laura", edad: 20, hobbies: ["programar", "ajedrez"] },
            { nombre: "Javier", edad: 22, hobbies: ["fútbol", "cine"] }
          ]
        },
        {
          nombre: "Civil",
          estudiantes: [
            { nombre: "Sofía", edad: 21, hobbies: ["fotografía", "leer"] }
          ]
        }
      ]
    },
    {
      nombre: "Derecho",
      carreras: [
        {
          nombre: "Derecho Penal",
          estudiantes: [
            { nombre: "Andrés", edad: 23, hobbies: ["debate", "natación"] }
          ]
        }
      ]
    }
  ]
};




// 1. Muestra el nombre de la universidad
console.log(universidad.nombre);  
//  "Universidad Central"

// 2. Muestra la calle donde está ubicada
console.log(universidad.ubicacion.direccion.calle);  
//  "Av. Principal"

// 3. Muestra el nombre de la primera facultad
console.log(universidad.facultades[0].nombre);  
//  "Ingeniería"

// 4. Muestra el nombre de la segunda carrera en la primera facultad
console.log(universidad.facultades[0].carreras[1].nombre);  
//  "Civil"

// 5. Muestra el nombre del primer estudiante de la carrera de Informática
console.log(universidad.facultades[0].carreras[0].estudiantes[0].nombre);  
//  "Laura"

// 6. Muestra el segundo hobby de Laura
console.log(universidad.facultades[0].carreras[0].estudiantes[0].hobbies[1]);  
//  "ajedrez"

// 7. Muestra la edad de Sofía
console.log(universidad.facultades[0].carreras[1].estudiantes[0].edad);  
//  21

// 8. Muestra el primer hobby del estudiante de Derecho Penal
console.log(universidad.facultades[1].carreras[0].estudiantes[0].hobbies[0]);  
//  "debate"