// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();

// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');

// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/home', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
//router.get('/about', PagesController.about);

// Identifica la ruta "/add" y la respuesta de la ruta
router.get('/add', PagesController.add);

// POST
router.post('/home', PagesController.post);

// Identifica la ruta "/show" y la respuesta de la ruta
router.get('/show/:id', PagesController.show);

// Identifica la ruta "/edit" y la respuesta de la ruta
router.get('/edit/:id', PagesController.edit);

// PUT
router.post('/edit/:id', PagesController.put);

//DELETE
router.post('/show/:id', PagesController.delete);

// Exporta las configuraciones
module.exports = router;