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

clientController.createClient = async (req, res) => {
  try {
    const { name, phone } = req.body;
    const client = new Client({ name, phone });
    await client.save();
    res.status(201).json(client);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = clientController;
