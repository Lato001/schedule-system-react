const {Schema, model} = require('mongoose');

const turnSchema = new Schema({
  barber_id: {
    type: Schema.Types.ObjectId,
    ref: 'Barber',
    required: [true, 'El barbero es requerido']
  },
  service_id: {
    type: Schema.Types.ObjectId,
    ref: 'Service',
    required: [true, 'El servicio es requerido']
  },
  client_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: null
    // Puede ser null si el cliente no está registrado
  },
  client_name: {
    type: String,
    required: [true, 'El nombre del cliente es requerido']
  },
  client_email: {
    type: String,
    sparse: true
    // No requerido pero único si existe
  },
  client_phone: {
    type: String,
    required: [true, 'El teléfono del cliente es requerido']
  },
  start_time: {
    type: Date,
    required: [true, 'La fecha y hora del turno es requerida']
  },
  duration: {
    type: Number,
    required: [true, 'La duración es requerida']
    // en minutos
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'completed', 'no-show', 'cancelled'],
    default: 'pending'
  },
  notes: {
    type: String,
    default: ''
  },
  admin_notes: {
    type: String,
    default: ''
  },
    timestamps: true
});


module.exports = mongoose.model('Turn', turnSchema);