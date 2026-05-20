const usersController = {};
const User = require('../models/User');




//USERS GET
usersController.getUsers = async  (req, res) => 
{
    const users = await User.find();
    res.json(users);

}

usersController.getUserById = async  (req, res) => 
{
  try {
    const id = req.params._id;
    const user = await User.findById(id);
    res.json(user);
  } catch (error) {res.status(505).json({message:error.message}); }
}

//USER POST
usersController.registerUser = async (req, res) => {
    try {
    const {name, email, phone, password, role, is_active } = req.body;
    user = new User({
      name,
      email,
      phone,
      password,
      role: role || 'client'
    });
    await user.save();

    res.status(201).json({
      message: 'Usuario registrado exitosamente',
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
  }
//USERS PUT
usersController.updateUser = async (req, res) =>{

  const {name, email, phone,role,is_active } = req.body;
  userId = req.params._id;
  try {
    const user = await User.findByIdAndUpdate(userId, {
      name,
      email,
      phone,
      role,
      is_active
    });
  
    res.json({message: `User ${user.name} was Updated` })
  } catch (error) {

    res.status(505).json({ error: error.message });
  }

} ;

//USERS DELETE
usersController.deleteUser = async  (req, res) => 
  {
    try {
      id = req.params._id;
      user = await User.findByIdAndUpdate(
      id,
      { $set: { is_active: false } }
    );
    (user.is_active?res.json({message: `The user ${user.name} was deleted sucessfully!`}) : res.status(404).json({ message: "user not found" }));
    } catch (error) {
      
      res.status(500).json({ message: "error delete in delete process" });
    }
}
module.exports = usersController;