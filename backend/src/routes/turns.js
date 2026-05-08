const {Router}  = require('express');
const router = Router();

const {getTurns, getTurnById, createTurn, updateTurn, deleteTurn} = require('../controllers/turns.controller');


router.route('/')
    .get(getTurns)
    .post(createTurn)

router.route('/:id')
    .get(getTurnById)
    .put(updateTurn)
    .delete(deleteTurn)

module.exports = router;