const {Router}  = require('express');
const router = Router();
const {verifyToken, adminOnly} = require('../middlewares/authMiddleware');
const {getUsers, getUserById,createUser, registerUser , loginUser,isLogged, logoutUser,  deleteUser, updateUser, getCryptInfo} = require('../controllers/usersController');



router.route('/login')
.post(loginUser)


router.route('/authme')
.get(isLogged)


router.route('/logout')
.post(verifyToken, logoutUser)

router.route('/homepage')
.get(verifyToken, getCryptInfo)

router.route('/users')
.get(verifyToken, getUsers)
.post(verifyToken, createUser)

router.route('/register')
.post(verifyToken, adminOnly, registerUser)


router.route("/info")
.get(verifyToken, getCryptInfo);


router.route('/users/:_id')
.get(getUserById)
.delete(deleteUser)
.put(updateUser)


module.exports = router;