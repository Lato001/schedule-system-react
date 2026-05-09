const {Router}  = require('express');
const router = Router();

const {getUsers,registerUser } = require('../controllers/admin.controller');


/*
.post(createUser);

.get(getUserById)
.delete(deleteUser);
*/

router.route('/')
.get(getUsers)

router.route('/')
.post(registerUser)

module.exports = router;