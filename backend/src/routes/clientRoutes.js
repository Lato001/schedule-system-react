const {Router} = require('express');
const router = Router();
const {verifyToken} = require('../middlewares/authMiddleware');
const {getClients, createClient} = require('../controllers/clientController');

router.route('/clients')
  .get(verifyToken, getClients)
  .post(verifyToken, createClient);

module.exports = router;
