var collection = [
  { id: 123, nombre: "Mario Kart 8", stock: 3 },
  { id: 58, nombre: "The Legend of Zelda", stock: 89 },
  { id: 122, nombre: "Super Mario Party", stock: 5 },
  { id: 33, nombre: "Pokémon Espada", stock: 55 },
  { id: 77, nombre: "Pokémon Escudo", stock: 17 },
];

function getOne(id) {
  var resultado = collection.find(function (item) {
    if (item.id == id) {
      return item;
    }
  });
  return resultado;
}

function getAll() {
  var imprimirTabla = console.table(collection);
  return imprimirTabla;
}

function getAllWith(minStock) {
  var filtradoDeStock = collection.filter(function (item) {
    return item.stock >= minStock;
  });
  return filtradoDeStock;
}

exports.buscarID = getOne;
exports.todosLosProductos = getAll;
exports.productoPorStock = getAllWith;
exports.productos = collection;
