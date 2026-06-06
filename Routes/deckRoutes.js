const express = require('express');
const router = express.Router();
const deckController = require('../controllers/deckController');

router.get('/', deckController.getDecklist);
router.post('/', deckController.addCard);
router.put('/:id', deckController.updateQuantity);
router.delete('/:id', deckController.removeCard);

module.exports = router;