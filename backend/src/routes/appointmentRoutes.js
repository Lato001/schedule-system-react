const {Router} = require('express');
const router = Router();
const {verifyToken} = require('../middlewares/authMiddleware');
const {getAppointments, createAppointment, updateAppointmentStatus, deleteAppointment} = require('../controllers/appointmentController');

router.route('/appointments')
  .get(verifyToken, getAppointments)
  .post(verifyToken, createAppointment);

router.route('/appointments/:_id/status')
  .put(verifyToken, updateAppointmentStatus);

router.route('/appointments/:_id')
  .delete(verifyToken, deleteAppointment);

module.exports = router;
