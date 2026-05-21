const usersController = {};
const { verifyToken } = require('../middlewares/authMiddleware');
const User = require('../models/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')



usersController.getCryptInfo = async (req, res) => {{
    res.json({message: "The token is valid, MENSAJE ENCRIPTADO"})
}}


usersController.registerUser = async (req, res) => {
  try {
    const {name, phone, email, password} = req.body

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "A User with this Email already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    
    const user = new User({
      name, 
      email,
      phone,
      password: hashedPassword
    });
    
    await user.save();
    res.status(201).json({
      message: "User was registered sucessfully",
      user: {
        id: user._id,
        email: user.email
      }
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}


usersController.loginUser = async (req, res) => {
  
  const {email, password} = req.body;
  
  try {
    //Utilzo +password para hacer el get de la password a la query {en mi db el Select=false}
    const user = await User.findOne({ email }).select("+password"); 
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }
    const payload = { id: user._id, email: user.email, role:user.role };
    const token = jwt.sign(payload, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.json({
      message: "Login exitoso",
      token,
      user: {
        id: user._id,
        email: user.email,
      },
    });
  } catch (error) {
        res.status(500).json({ message: "Error en el proceso de login", error: error.message });
  }};

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
usersController.createUser = async (req, res) => {
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