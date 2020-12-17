require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.get('/', function(req, res) {
    res.send('<h1>Servidor rest de Isaac Adan </h1>');
});

app.use(require('./routes/usuario'));
app.use(require('./routes/empleado'));
app.use(require('./routes/departamento'));


mongoose.connect('mongodb://localhost:27017/proyecto', {
    
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err, res) => {
    if (err) throw err;
    console.log('Base de datos ONLINE');
});

app.listen(process.env.PORT, () => {
    console.log('El servidor esta en linea por el puerto ', process.env.PORT);
});