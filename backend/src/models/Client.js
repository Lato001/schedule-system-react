const {Schema, model} = require('mongoose');

const ClientSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre del cliente es requerido']
  },
  phone: {
    type: String,
    required: [true, 'El teléfono del cliente es requerido']
  },
  email:{
    type: String,
    required: [true, 'El email del cliente es requerido']
  }
}, {timestamps: true});

module.exports = model('Client', ClientSchema);
