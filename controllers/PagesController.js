// Importa el modelo de productos
let ProductModel = require('../models/Product')

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  ProductModel.all()
    .then((data) => {
      // Guardamos los productos en una variable
      let products = data;
      // Enviamos los datos a la vista
      res.render('pages/homepage', { products: products });
    });
}

// Reglas para la respuesta para la petición "/about"
/* exports.about = (req, res) => {
  res.send('About us');
} */

// Reglas para la respuesta para la petición "/add"
exports.add = (req, res) => {
  res.render('pages/insert');
}

// Reglas para la respuesta para la petición "/show"
exports.show = (req, res) => {
  const id = req.params.id;
  if(typeof id != 'undefined')
  {
    ProductModel.show(id)
    .then((data) => {
      // Guardo el producto en una variable
      let product = data;
      // Envio los datos a la pagina
      res.render('pages/show', { product: product });
    });
  }
  else
  {
    res.redirect('/home');
  }
}

// Reglas para la respuesta para la petición "/edit"
exports.edit = (req, res) => {
  const id = req.params.id;
  if(typeof id != 'undefined')
  {
    ProductModel.show(id)
    .then((data) => {
      // Guardo el producto en una variable
      let product = data;
      // Envio los datos a la pagina
      res.render('pages/edit', { product: product });
    });
  }
  else
  {
    res.redirect('/home');
  }
}

// Reglas para la respuesta para la petición "/post"
exports.post = (req, res) => {
  const prod = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price
  };

  ProductModel.add(prod).then(() => {
    res.redirect('/home');
  });
};

// Reglas para la respuesta para la petición "/put"
exports.put = (req, res) => {
  const prod = {
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    updated_at: new Date()
  };

  const id = req.body.id;
  ProductModel.edit(prod, id).then(() => {
    res.redirect('/home');
  });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  ProductModel.delete(id)
  .then(() => {
    res.redirect('/home');
  });

}