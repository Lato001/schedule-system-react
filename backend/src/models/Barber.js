const {Schema, model} = require('mongoose');

const barberSchema = new Schema({
  user_id: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'El user_id es requerido']
  },
  is_active: {
    type: Boolean,
    default: true
  },
    timestamps: true
  
});