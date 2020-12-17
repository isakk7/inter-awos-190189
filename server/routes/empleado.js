const express = require('express')
const app = express();
const Empleado = require('../models/empleado');
const _ = require('underscore');



app.get('/empleado', function(req, res) {
    let desde = req.query.desde || 0;
    let hasta = req.query.hasta || 5;
    
    Empleado.find({})
    .skip(Number(desde))
    .limit(Number(hasta))
    .populate('idusuario' ,'nombre primerapellido segundoapellido edad email telefono')
    .populate('iddepartamento' ,'nombre numeroempleados aniosservicio idusuario telefono')
    .exec((err, empleado) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error al momento de consultar',
                err
            });
        }

        res.json({
            ok: true,
            msg: 'Lista de empleados obtenida con exito',
            conteo: empleado.length,
            empleado
    
        });
    });
});

app.post('/empleado', function(req, res) {
    let body = req.body;
    let emp = new Empleado({
        idusuario: body.idusuario,
        iddepartamento: body.iddepartamento,
        nombredelpuesto: body.nombredelpuesto,
        aniosservicio: body.aniosservicio,
        horaentrada: body.horaentrada,
        horasalida: body.horasalida,
        activo: body.activo
    });

    emp.save((err, empDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error',
                err
            });
        }

        res.json({
            ok:true,
            msg: 'Empleado insertado con exito',
            empDB
        });
    });
});

app.put('/empleado/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, [ 'idusuario', 'iddepartamento', 'nombredelpuesto', 'aniosservicio', 'horaentrada', 'horasalida' ]);

    Empleado.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' },
        (err, empDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ocurrio un error al momento de actualizar',
                    err
                });
            }

            res.json({
                ok: true,
                msg: 'Empleado actualizado con exito',
                empleado: empDB
            });
        });
});

app.delete('/empleado/:id', function(req, res) {
  
    let id = req.params.id;

    Empleado.findByIdAndUpdate(id, { estado: false }, { new: true, runValidators: true, context: 'query' }, (err, empDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error al momento de eliminar Empleado',
                err
            });
        }

        res.json({
            ok: true,
            msg: 'Empleado eliminado con exito',
            empDB
        });
    });
});

module.exports = app;

