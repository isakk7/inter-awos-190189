const express = require('express')
const app = express();
const Departamento = require('../models/departamento');
const _ = require('../models/departamento');



app.get('/departamento', function(req, res) {
    
    Departamento.find({ estado: true})
    .skip(Number(desde))
    .limit(Number(haste))
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
            msg: 'Lista de usuarios obtenida con exito',
            conteo: departamento.length,
            departamento
    
        });
    });
});

app.post('departamento', function(req, res) {
    let body = req.body;
    let dep = new departamento({
        idjefadearea: body.idjefadearea,
        nombre: body.nombre,
        nombreempleados: body.nombreempleado,
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
            msg: 'Empleado insertado con exito',
            depDB
        });
    });
});

app.put('/departamento/:id', function(req, res) {
    let id = req.params.id;
    let body = _.pick(req.body, ['nombre', 'email']);

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
                msg: 'Usuario actualizado con exito',
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
                msg: 'Ocurrio un error al momento de eliminar Usuario',
                err
            });
        }

        res.json({
            ok: true,
            msg: 'Usuario eliminado con exito',
            depDB
        });
    });
});

module.exports = app;

