const {Schema, model} = require('mongoose');

const serviceSchema = new Schema({
  name: {
    type: String,
    required: [true, 'El nombre del servicio es requerido']
  },
  duration: {
    type: Number,
    required: [true, 'La duración es requerida'],
    min: 15
    // en minutos
  },
  price: {
    type: Number,
    required: [true, 'El precio es requerido'],
    min: 0
  },
  is_active: {
      type: Boolean,
      default: true
    }
  ,
  timestamps: true
});

module.exports = mongoose.model('Service', serviceSchema);
