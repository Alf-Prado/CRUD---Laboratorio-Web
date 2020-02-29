// Obtiene la conexión con la base de datos
const knex = require('../database/connection');

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  }
}

// Obtiene todos los productos en la base
exports.all = () => {
  return knex
    .from('products')
    .select('*');
}

// Obtiene un producto en la base
exports.show = (id) => {
  return knex
    .from('products')
    .select('*')
    .where('id', id)
    .first();
}

//Agrega un producto
exports.add = (producto) =>{
  return knex
  .from('products')
  .insert(producto)
}

//Edita un producto
exports.edit = (producto, iD) => {
  return knex
  .from('products')
  .where('id', iD)
  .update(producto)
}

//Elimina un producto
exports.delete = (id) => {
  return knex
  .from('products')
  .where('id', id)
  .del()
}