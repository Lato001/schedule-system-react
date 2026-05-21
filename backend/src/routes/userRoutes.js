const {Router}  = require('express');
const router = Router();
const {verifyToken} = require('../middlewares/authMiddleware');
const {getUsers, getUserById,createUser, registerUser , loginUser, deleteUser, updateUser, getCryptInfo } = require('../controllers/usersController');


router.route('/users')
.get(getUsers)
.post(createUser)

router.route('/login')
.post(loginUser)

router.route('/register')
.post(registerUser)

router.route("/info")
.get(verifyToken, getCryptInfo);


router.route('/users/:_id')
.get(getUserById)
.delete(deleteUser)
.put(updateUser)


module.exports = router;