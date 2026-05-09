const {Schema, model} = require('mongoose');

const barberScheduleSchema = new Schema({
  barber_id: {
    type: Schema.Types.ObjectId,
    ref: 'Barber',
    required: [true, 'El barbero es requerido']
  },
  day_of_week: {
    type: Number,
    required: [true, 'El día de la semana es requerido'],
    min: 1,
    max: 7
    // 1 = Monday, 7 = Sunday
  },
  start_time: {
    type: String,
    required: [true, 'La hora de inicio es requerida']
    // Format: "09:00"
  },
  end_time: {
    type: String,
    required: [true, 'La hora de fin es requerida']
    // Format: "18:00"
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  deletedAt: {
    type: Date,
    default: null
  }
});
barberScheduleSchema.index({ barber_id: 1, day_of_week: 1 }, { unique: true });

module.exports = mongoose.model('BarberSchedule', barberScheduleSchema);