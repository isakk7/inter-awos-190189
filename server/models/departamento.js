const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let departamentoSchema = new Schema({
    idjefedearea: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: [true, 'El id de departamento es necesario']
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
        type: Number
     
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

module.exports = mongoose.model('Departamento', departamentoSchema);