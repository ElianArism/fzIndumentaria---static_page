//imports
const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

let roles =  {
    values: ['ADMIN_ROLE', 'USER_ROLE'], 
    message: '{VALUE} no es un rol valido'
}

// declarando schema  
let Schema = mongoose.Schema; 

// model usuario 
let UserSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'El nombre de usuario es necesario.'], 
        minlength: 5, 
        maxlength: 28, 
    }, 
    email: {
        type: String, 
        required: true, 
        unique: true,
    }, 
    password: {
        type: String, 
        required: [true, 'La contraseña es necesaria.']
    },
    role: {
        type: String, 
        default: 'USER_ROLE', 
        enum: roles
    }, 
    isActive: {
        type: Boolean, 
        default: true
    }, 
    google: {
        type: Boolean, 
        default: false
    }
}); 

// eliminar la password de las impresiones 
UserSchema.methods.toJSON = function() {
    let user = this;
    let userObject = user.toObject(); 
    delete userObject.password; 

    return userObject; 
}

// usando uniqueValidator
UserSchema.plugin( uniqueValidator, { message: `{PATH} Debe ser unico.`}); 

// exportando el modelo 
module.exports = mongoose.model('UserModel', UserSchema); 

