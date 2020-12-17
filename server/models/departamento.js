const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let departamentoSchema = new Schema({
    idjefedearea: {
        type: String,
        required: [true, 'El id es necesario']
    },
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    numeroempleados: {
        type: Number,
        required: [true, 'El numero de empleados es necesario']
    },
    extensiontelefonica: {
        type: Number,
        ref: 'Telefono'
    },
   
    activo: {
        type: Boolean,
        default: true
    },
    estado: {
        type:Boolean,
        default: true
    },
    usuario: {
        type:Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El usuario es obligatorio']

    }
 
});

module.exports = mongoose.model('Departamento', departamentoSchema);