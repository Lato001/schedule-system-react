const {Router}  = require('express');
const router = Router();
const {verifyToken} = require('../middlewares/authMiddleware');
const {getUsers, getUserById,registerUser,loginUser, deleteUser, updateUser, getCryptInfo } = require('../controllers/usersController');


/*
.post(createUser);

.get(getUserById)
.delete(deleteUser);
*/

router.route('/users')
.get(getUsers)
.post(registerUser)

router.route('/login')
.post(loginUser)



router.route("/info")
.get(verifyToken, getCryptInfo);


router.route('/users/:_id')
.get(getUserById)
.delete(deleteUser)
.put(updateUser)


module.exports = router;