const adminController = {};
const User = require('../models/User');

//USERS GET

adminController.getUsers = async  (req, res) => 
{
    const users = await User.find();
    res.json(users);

}


//adminController.getUserById = (req, res) => res.json({ title: 'User ...' });

//Register User
adminController.registerUser = async (req, res) => {
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
      token,
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
//adminController.updateUser = (req, res) => res.json({ message: 'User was updated' });

//USERS DELETE
//adminController.deleteUser = (req, res) => res.json({ message: 'User was deleted' });

module.exports = adminController;