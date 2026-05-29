const {Router} = require('express');
const router = Router();
const {verifyToken} = require('../middlewares/authMiddleware');
const {getClients, createClient, getClientById} = require('../controllers/clientController');

router.route('/clients')
  .get(verifyToken, getClients)
  .post(verifyToken, createClient);

router.route('/clients/_id')
.get(verifyToken,getClientById)

module.exports = router;
