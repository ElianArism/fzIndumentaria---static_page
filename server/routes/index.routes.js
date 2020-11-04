//imports
const express = require('express');

// instancia express 
const app = express();

// configuracion de rutas 
app.use(require('./usuario.routes')); 

// exportar logica de express 
module.exports = app; 