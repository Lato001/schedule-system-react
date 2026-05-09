const {Schema, model} = require('mongoose');

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre es requerido']
  },
  email: {
    type: String,
    required: [true, 'El email es requerido'],
    unique: true,
    lowercase: true,
    //match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Email inválido']
  },
  phone: {
    type: String,
    required: [true, 'El teléfono es requerido']
  },
  password: {
    type: String,
    required: [true, 'La contraseña es requerida'],
    minlength: 6,
    select: false // No incluir en queries por defecto
  },
  role: {
    type: String,
    enum: ['admin', 'barber', 'client'],
    default: 'client'
  },
    is_active: {
      type: Boolean,
      default: true
    },
},{timestamps :true});

module.exports = model('User', userSchema);