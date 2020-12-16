const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let departamentoSchema = new Schema({
    idjefadearea: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    nombre: {
        type: String,
        required: [true, 'El primer apellido es necesario']
    },
    nombreempleados: {
        type: String,
        required: [true, 'El segundo apellido es necesario']
    },
    extensiontelefonica: {
        type: Number,
        ref: 'Edad'
    },
   
    activo: {
        type: Boolean,
        default: true
    },
 
});

module.exports = mongoose.model('Departamento', departamentoSchema);