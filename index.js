var moduloProductos = require("./products.js");

function main() {
  console.log("----------------------------------------------------------");
  console.log("MOSTRAR LOS PRODUCTOS");
  console.log("----------------------------------------------------------");
  console.log(moduloProductos.productos);
  console.log("----------------------------------------------------------");
  console.log("MOSTRAR TODOS LOS PRODUCTOS EN UNA TABLA");
  console.log("----------------------------------------------------------");
  console.log(moduloProductos.todosLosProductos());
  console.log("----------------------------------------------------------");
  console.log("MOSTRAR LOS PRODUCTOS POR STOCK");
  console.log("----------------------------------------------------------");
  console.log("producto con +17 de stock:");
  console.log(moduloProductos.productoPorStock(17));
  console.log("----------------------------------------------------------");
  console.log("MOSTRAR LOS PRODUCTOS POR ID");
  console.log("----------------------------------------------------------");
  console.log("producto con ID 33 ");
  console.log(moduloProductos.buscarID(33));
  console.log("----------------------------------------------------------");
}

main();
