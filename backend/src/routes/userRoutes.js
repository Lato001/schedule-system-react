const {Router}  = require('express');
const router = Router();
const {verifyToken, isLogued} = require('../middlewares/authMiddleware');
const {getUsers, getUserById,createUser, registerUser , loginUser, logoutUser,  deleteUser, updateUser, getCryptInfo } = require('../controllers/usersController');

router.route('/login')
.get(isLogued)
.post(isLogued, loginUser)

router.route('/logout')
.post(verifyToken, logoutUser)

router.route('/homepage')
.get(verifyToken, getCryptInfo)



router.route('/users')
.get(getUsers)
.post(createUser)

router.route('/register')
.post(registerUser)


router.route("/info")
.get(verifyToken, getCryptInfo);


router.route('/users/:_id')
.get(getUserById)
.delete(deleteUser)
.put(updateUser)


module.exports = router;