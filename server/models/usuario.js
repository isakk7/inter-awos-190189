const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    primer_apellido: {
        type: String,
        required: [true, 'El primer apellido es necesario']
    },
    segundo_apellido: {
        type: String,
        required: [true, 'El segundo apellido es necesario']
    },
    edad: {
        type: Number,
        ref: 'Edad'
    },
    curp: {
        type: String,
        required: [true, 'La curp es necesaria']
    },
    telefono: {
        type: Number,
        ref: 'Telefono'
        
    },
    
    email: {
        type: String,
        required: [true, 'El correo es necesario'],
        unique: true
    },
    activo: {
        type: Boolean,
        default: true
    },
 
});

module.exports = mongoose.model('Usuario', usuarioSchema);