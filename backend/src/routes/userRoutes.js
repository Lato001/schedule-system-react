const {Router}  = require('express');
const router = Router();

const {getUsers, getUserById,registerUser, deleteUser, updateUser } = require('../controllers/usersController');


/*
.post(createUser);

.get(getUserById)
.delete(deleteUser);
*/

router.route('/users')
.get(getUsers)
.post(registerUser)

router.route('/users/:_id')
.get(getUserById)
.delete(deleteUser)
.put(updateUser)


module.exports = router;