const {Schema, model} = require('mongoose');

const barberUnavailableSchema = new Schema({
  barber_id: {
    type: Schema.Types.ObjectId,
    ref: 'Barber',
    required: [true, 'El barbero es requerido']
  },
  date: {
    type: Date,
    required: [true, 'La fecha es requerida']
    // Solo la fecha, sin hora
  },
  start_time: {
    type: String,
    required: [true, 'La hora de inicio es requerida']
    // Formato: "09:00"
  },
  end_time: {
    type: String,
    required: [true, 'La hora de fin es requerida']
    // Formato: "18:00"
  },
  reason: {
    type: String,
    enum: ['vacation', 'illness', 'personal', 'other'],
    default: 'other'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
  // NO tiene deletedAt porque son registros puntuales
});

barberUnavailableSchema.index({ barber_id: 1, date: 1 });

module.exports = mongoose.model('BarberUnavailable', barberUnavailableSchema);