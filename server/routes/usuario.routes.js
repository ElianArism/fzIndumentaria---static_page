// imports 
const express = require('express'); 
const bcrypt = require('bcrypt'); 
const _ = require('underscore'); 
const User = require('../model/user.model'); 

// instancia express 
const app = express(); 

// crear user
app.post('/usuario', (req, res) => {
    let { name, email, password, role } = req.body; 

    const newUser = new User({
        name, 
        email, 
        password, 
        role 
    }); 

    newUser.save((err, userSaved) => {

        if(err) res.status(400).json({ ok: false, msg: 'Algo salio mal, intente otra vez.', err }); 
        
        return res.json({
            ok: true, 
            userSaved 
        }); 
    }); 

}); 

// listar user
app.get('/usuario', (req, res) => {
    let pInit = req.params.i || 0;
    let pEnd; 
    if(req.params.e) pEnd = req.params.e; 

    // busca solo los activos 
    User.find({ isActive: true }, 'name email role isActive') 
    .skip(pInit)
    .limit(pEnd) 
    .exec((err, UsersList) => {

        if(err) {
            return res.status(400).json({
                ok: false,
                msg: 'Algo fallo, reintente luego.',
                err 
            });
        }

        User.count({ isActive: true }, (err, count) => {
            if(err) {
                return res.status(400).json({
                    ok: false, 
                    msg:'Debido a un error no se pudo realizar el conteo de usuarios.', 
                    err
                });  
            }  
            
            return res.json({
                ok: true, 
                Usuarios: UsersList, 
                count: `Total de usuarios activos: ${count}`
            }); 
        }); 
    });
    
}); 

// buscar user
app.get('/usuario/:id', (req, res) => {
    const id = req.params.id; 

    User.findById(id, 'name email role', (err, userFound) => {
        if(err) {
            return res.status(404).json({
                ok: false, 
                msg: 'No se encontro un usuario que coincida con el id proporcionado.', 
                err
            }); 
        }

        return res.json({
            ok: true, 
            userFound 
        }); 
    });
}); 

// actualizar user
app.put('/usuario/:id', (req, res) => {
    let id = req.params.id;  

    
    User.findByIdAndUpdate(id, req.body, {new: true, runValidators: true, context: 'query'}, (err, updatedUser) => {
        if(err) {
            return res.status(404).json({
                ok: false, 
                err 
            });
        }

        return res.json({
            ok: true, 
            updatedUser
        });
    }); 
}); 

// activar/desactivar user 
app.delete('/usuariodes/:id', (req, res) => {
    let id = req.params.id;  
    let userStatus;

    // obtener el estado del usuario 
    User.findById(id, 'isActive', (err, data) => {
        if(err) {
            return res.status(404).json({
                ok: false, 
                msg: 'No se encontro un usuario que coincida con el id proporcionado.', 
                err
            }); 
        }
       
        return data.isActive; 
    })
    .then(data => {
        User.findByIdAndUpdate(id, { isActive: !data.isActive } , {new: true}, (err, deletedUser) => {
            if(err) {
                return res.status(404).json({
                    ok: false, 
                    msg: 'No se encontro al usuario que se quiere desactivar.', 
                    err 
                });
            }
    
            return res.json({
                ok: true,
                msg: 'Se desactivo la cuenta de este usuario',  
                deletedUser
            });
        }); 
    });
   
}); 

// eliminar definitivamente
app.delete('/usuarioel/:id', (req, res) => {
    let id = req.params.id;  

    User.findByIdAndDelete(id, (err, deletedUser) => {
        if(err) {
            return res.status(404).json({
                ok: false, 
                msg: 'No se encontro al usuario que se quiere eliminar.', 
                err 
            });
        }

        if(!deletedUser) {
            return res.status(404).json({
                ok: false, 
                msg: 'No se encontro al usuario que se quiere eliminar.', 
            }); 
        }

        return res.json({
            ok: true,
            msg: 'Se elimino la cuenta de este usuario',  
            deletedUser
        });
    }); 
}); 

// exportando logica de express 
module.exports = app; 