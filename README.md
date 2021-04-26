# Desafio21
Para este desafío, deben crear una aplicación que esté estructurada en dos módulos:

Index.js: este módulo es el controlador del programa. Como siempre, debe tener una función main() y será el encargado de llamar a las funciones del módulo products. Solo desde este archivo pueden imprimir en la pantalla.
Products.js: este módulo no necesita función main(). En él tienen que declarar los siguientes datos:
un array de objetos, que no tiene que ser exportado a index.js, y debe cumplir con esta estructura:

una función que se llame getOne(id) y que obtenga un producto en particular de la lista.
una función que se llame getAll() y que liste todos los productos.
una función que se llame getAllWith(minStock) y que filtre según el stock de los productos.
