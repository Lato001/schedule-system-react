const appointmentController = {};
const Appointment = require('../models/Appointment');

appointmentController.getAppointments = async (req, res) => {
  try {
    const filter = {};
    if (req.query.employee_id) {
      filter.employee_id = req.query.employee_id;
    }
    if (req.user.role === 'employee') {
      filter.employee_id = req.user.id;
    }
    const appointments = await Appointment.find(filter)
      .populate('employee_id', 'name email')
      .sort({ date: -1, time: -1 });
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

appointmentController.createAppointment = async (req, res) => {
  try {
    const { client_id, date, time, notes } = req.body;
    const appointment = new Appointment({
      employee_id: req.user.id,
      client_id,
      date,
      time,
      notes
    });
    await appointment.save();
    const populated = await Appointment.findById(appointment._id)
      .populate('employee_id', 'name email');
    res.status(201).json(populated);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

appointmentController.updateAppointmentStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const validStatuses = ['pending', 'cancelled', 'attended'];
    if (!validStatuses.includes(status)) {
      return res.status(400).json({ message: 'Estado inválido' });
    }
    const appointment = await Appointment.findByIdAndUpdate(
      req.params._id,
      { status },
      { new: true }
    )
      .populate('employee_id', 'name email');
    if (!appointment) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }
    res.json(appointment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

appointmentController.deleteAppointment = async (req, res) => {
  try {
    const appointment = await Appointment.findByIdAndDelete(req.params._id);
    if (!appointment) {
      return res.status(404).json({ message: 'Turno no encontrado' });
    }
    res.json({ message: 'Turno eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = appointmentController;
