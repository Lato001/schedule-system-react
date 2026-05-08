const turnConstroller = {};

//TURNS GET
turnConstroller.getTurns = (req, res) => res.json({ message: [] });
turnConstroller.getTurnById = (req, res) => res.json({ title: 'Turn ...' });

//TURNS POST
turnConstroller.createTurn = (req, res) => res.json({ message: 'Turn was created' });

//TURNS PUT
turnConstroller.updateTurn = (req, res) => res.json({ message: 'Turn was updated' });

//TURNS DELETE
turnConstroller.deleteTurn = (req, res) => res.json({ message: 'Turn was deleted' });


module.exports = turnConstroller;