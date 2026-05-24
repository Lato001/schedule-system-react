const {Schema, model} = require('mongoose');

const appointmentSchema = new Schema({
  employee_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'El empleado es requerido']
  },
  client_id: {
    type: Schema.Types.ObjectId,
    ref: 'Client',
    required: [true, 'El cliente es requerido']
  },
  date: {
    type: Date,
    required: [true, 'La fecha del turno es requerida']
  },
  time: {
    type: String,
    required: [true, 'La hora del turno es requerida']
  },
  status: {
    type: String,
    enum: ['pending', 'cancelled', 'attended'],
    default: 'pending'
  },
  notes: {
    type: String,
    default: ''
  }
}, {timestamps: true});

module.exports = model('Appointment', appointmentSchema);
