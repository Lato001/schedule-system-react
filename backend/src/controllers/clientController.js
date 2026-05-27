const clientController = {};
const Client = require('../models/Client');

clientController.getClients = async (req, res) => {
  try {
    const clients = await Client.find().sort({ createdAt: -1 });
    res.json(clients);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

clientController.getClientById = async (req, res) => {
  try {
    const {_id} = req.params._id;
    const client = await Client.findById(_id)
    res.json(client);
  } catch (error) {res.status(505).json({ error: error.message });}
};


clientController.createClient = async (req, res) => {
  try {
    const { name, phone, email } = req.body;
    const client = new Client({ name, phone, email });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = clientController;
