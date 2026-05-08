const {Router}  = require('express');
const router = Router();

router.route('/').get((req, res) => res.send('Users Home'));


router.route('/:id').get((req, res) => res.send('User: ' + req.params.id));

module.exports = router;