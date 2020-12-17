const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    primerapellido: {
        type: String,
        required: [true, 'El primer apellido es necesario']
    },
    segundoapellido: {
        type: String,
        required: [true, 'El segundo apellido es necesario']
    },
    edad: {
        type: Number,
        required: [true, 'La edad es necesaria']
    },
    curp: {
        type: String,
        required: [true, 'La curp es necesaria'],
        unique: true
    },
    telefono: {
        type: Number,
        required: [true, 'El numero es necesario'],
        unique: true
        
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
     
    estado: {
        type:Boolean,
        default: true
    }
  
 
});

module.exports = mongoose.model('Usuario', usuarioSchema);