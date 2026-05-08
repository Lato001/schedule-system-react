const userController = {};


//USERS GET

userController.getUsers = (req, res) => res.json({ message: [] });
userController.getUserById = (req, res) => res.json({ title: 'User ...' });

//USERS POST
userController.createUser = (req, res) => res.json({ message: 'User was created' });

//USERS PUT
userController.updateUser = (req, res) => res.json({ message: 'User was updated' });

//USERS DELETE
userController.deleteUser = (req, res) => res.json({ message: 'User was deleted' });

module.exports = userController;