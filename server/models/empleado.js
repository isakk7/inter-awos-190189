const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let empleadoSchema = new Schema({
    idusuario: {
       type: String,
       ref: 'Usuario'
    },
    iddepartamento: {
        type: String,
        ref: 'Departamento'
    },
    nombredelpuesto: {
        type: String,
        ref: 'Puesto'
    },
    aniosservicio: {
        type: Number,
        ref: 'Anios Servicio'
    },
    horaentrada: {
        type: Number,
        ref: 'Hora entrada'
    },
    horasalida: {
        type: Number,
        ref: 'Hora salida'
        
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

module.exports = mongoose.model('Empleado', empleadoSchema);