const express = require('express')
const app = express();
const Departamento = require('../models/departamento');
const _ = require('underscore');



app.get('/departamento', function(req, res) {
    let desde = req.query.desde || 0;
    let hasta = req.query.hasta || 5;

    Departamento.find({})
    .skip(Number(desde))
    .limit(Number(hasta))
    .populate('usuario', 'nombre primerapellido segundoapellido edad curp telefono email ')
    .exec((err, departamento) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error al momento de consultar',
                err
            });
        }

        res.json({
            ok: true,
            msg: 'Lista de departamentos obtenida con exito',
            conteo: departamento.length,
            departamento
    
        });
    });
});

app.post('/departamento', function(req, res) {
    let body = req.body;
    let dep = new Departamento({
        idjefedearea: body.idjefedearea,
        nombre: body.nombre,
        numeroempleados: body.numeroempleados,
        extensiontelefonica: body.extensiontelefonica,
        activo: body.activo
    });

    dep.save((err, depDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error',
                err
            });
        }

        res.json({
            ok:true,
            msg: 'Departamento insertado con exito',
            depDB
        });
    });
});

app.put('/departamento/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['idjefedearea', 'nombre', 'numeroempleados', 'extensiontelefonica']);

    Departamento.findByIdAndUpdate(id, body, { new: true, runValidators: true, context: 'query' },
        (err, depDB) => {
            if (err) {
                return res.status(400).json({
                    ok: false,
                    msg: 'Ocurrio un error al momento de actualizar',
                    err
                });
            }

            res.json({
                ok: true,
                msg: 'Departamento actualizado con exito',
                departamento: depDB
            });
        });
});

app.delete('/departamento/:id', function(req, res) {
  
    let id = req.params.id;

    Departamento.findByIdAndUpdate(id, { estado: false }, { new: true, runValidators: true, context: 'query' }, (err, depDB) => {
        if (err) {
            return res.status(400).json({
                ok: false,
                msg: 'Ocurrio un error al momento de eliminar el Departamento',
                err
            });
        }

        res.json({
            ok: true,
            msg: 'Departamento eliminado con exito',
            depDB
        });
    });
});

module.exports = app;

