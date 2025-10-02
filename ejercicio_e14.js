
// Arreglo de productos
const productos = [
  { id: 1, nombre: "Laptop", categoria: "Electrónica", precio: 1200, stock: 10 },
  { id: 2, nombre: "Celular", categoria: "Electrónica", precio: 800, stock: 25 },
  { id: 3, nombre: "Teclado", categoria: "Accesorios", precio: 50, stock: 100 },
  { id: 4, nombre: "Mouse", categoria: "Accesorios", precio: 30, stock: 150 },
  { id: 5, nombre: "Monitor", categoria: "Electrónica", precio: 300, stock: 20 },
  { id: 6, nombre: "Silla Gamer", categoria: "Muebles", precio: 250, stock: 5 },
  { id: 7, nombre: "Escritorio", categoria: "Muebles", precio: 400, stock: 8 },
  { id: 8, nombre: "Audífonos", categoria: "Accesorios", precio: 70, stock: 60 },
  { id: 9, nombre: "Tablet", categoria: "Electrónica", precio: 600, stock: 12 },
  { id: 10, nombre: "Impresora", categoria: "Electrónica", precio: 200, stock: 15 },
  { id: 11, nombre: "Cámara", categoria: "Electrónica", precio: 1000, stock: 7 },
  { id: 12, nombre: "Smartwatch", categoria: "Electrónica", precio: 250, stock: 18 },
  { id: 13, nombre: "Parlante", categoria: "Accesorios", precio: 120, stock: 30 },
  { id: 14, nombre: "Microondas", categoria: "Electrodomésticos", precio: 180, stock: 12 },
  { id: 15, nombre: "Refrigeradora", categoria: "Electrodomésticos", precio: 900, stock: 4 },
  { id: 16, nombre: "Lavadora", categoria: "Electrodomésticos", precio: 700, stock: 6 },
  { id: 17, nombre: "Secadora", categoria: "Electrodomésticos", precio: 650, stock: 3 },
  { id: 18, nombre: "Cafetera", categoria: "Electrodomésticos", precio: 90, stock: 25 },
  { id: 19, nombre: "Ventilador", categoria: "Electrodomésticos", precio: 60, stock: 40 },
  { id: 20, nombre: "Licuadora", categoria: "Electrodomésticos", precio: 110, stock: 22 },
  { id: 21, nombre: "Cama", categoria: "Muebles", precio: 800, stock: 2 },
  { id: 22, nombre: "Ropero", categoria: "Muebles", precio: 500, stock: 3 },
  { id: 23, nombre: "Estufa", categoria: "Electrodomésticos", precio: 750, stock: 5 },
  { id: 24, nombre: "Horno", categoria: "Electrodomésticos", precio: 400, stock: 6 },
  { id: 25, nombre: "Lámpara", categoria: "Accesorios", precio: 45, stock: 50 },
  { id: 26, nombre: "Router", categoria: "Electrónica", precio: 130, stock: 20 },
  { id: 27, nombre: "Disco Duro", categoria: "Electrónica", precio: 150, stock: 35 },
  { id: 28, nombre: "Memoria USB", categoria: "Accesorios", precio: 25, stock: 200 },
  { id: 29, nombre: "Cargador", categoria: "Accesorios", precio: 35, stock: 90 },
  { id: 30, nombre: "Proyector", categoria: "Electrónica", precio: 600, stock: 4 }
];

// ===============================
// 1. Obtener solo los nombres de los productos
const obtenerNombres = arr => arr.map(p => p.nombre);
console.log("1) Nombres de productos:", obtenerNombres(productos));

// 2. Filtrar productos cuya categoría sea "Muebles"
const muebles = arr => arr.filter(p => p.categoria === "Muebles");
console.log("2) Productos de Muebles:", muebles(productos));

// 3. Primer producto con precio mayor a 1000
const precioMayor1000 = arr => arr.find(p => p.precio > 1000);
console.log("3) Producto con precio > 1000:", precioMayor1000(productos));

// 4. Precio total del inventario (precio × stock)
const totalInventario = arr => arr.reduce((acc, p) => acc + (p.precio * p.stock), 0);
console.log("4) Precio total inventario:", totalInventario(productos));

// 5. Verificar si todos tienen stock mayor a 0
const todosConStock = arr => arr.every(p => p.stock > 0);
console.log("5) ¿Todos tienen stock > 0?:", todosConStock(productos));

// 6. Verificar si al menos uno pertenece a "Electrodomésticos"
const hayElectrodomesticos = arr => arr.some(p => p.categoria === "Electrodomésticos");
console.log("6) ¿Hay electrodomésticos?:", hayElectrodomesticos(productos));

// 7. Ordenar por precio de menor a mayor
const ordenPrecio = arr => [...arr].sort((a, b) => a.precio - b.precio);
console.log("7) Productos ordenados por precio:", ordenPrecio(productos));

// 8. Ordenar por nombre en orden alfabético inverso
const ordenNombreInverso = arr => [...arr].sort((a, b) => b.nombre.localeCompare(a.nombre));
console.log("8) Productos ordenados por nombre inverso:", ordenNombreInverso(productos));

// 9. Productos con stock menor a 10
const stockBajo = arr => arr.filter(p => p.stock < 10);
console.log("9) Productos con stock < 10:", stockBajo(productos));

// 10. Promedio de precios de todos los productos
const promedioPrecios = arr => arr.reduce((acc, p) => acc + p.precio, 0) / arr.length;
console.log("10) Promedio de precios:", promedioPrecios(productos));
