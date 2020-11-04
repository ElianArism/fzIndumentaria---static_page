// const express = require('express');
// const path = require('path'); 

// const app = express(); 

// app.use(express.static('./dist/fzindumentaria'));

// app.get('/', (req, res) => {
//     res.sendFile('./dist/fzindumentaria/index.html'); 
// }); 

// app.listen(process.env.PORT || 8080);

// imports 
require('./config/config'); 
const mongoose = require('mongoose'); 
const bodyParser = require('body-parser'); 
const express = require('express');
const path = require('path'); 

// instancia express 
let app = express(); 


//conexion a la base de datos 
mongoose.connect( process.env.URLDB, {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}, (err, res) => {
    if(err) throw err; 
    console.log('Base de datos online');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false })); 

// configuracion global de las rutas 
app.use(require('./routes/index.routes')); 

// levantar servidor 
app.listen(process.env.PORT, () => {
    console.log('Servidor listo en el puerto 3000');
}); 
