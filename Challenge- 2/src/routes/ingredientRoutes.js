const express = require('express');
const { addIngredient, updateIngredient, getIngredients } = require('../controllers/ingredientController');
const router = express.Router();

router.post('/', addIngredient);
router.put('/:id', updateIngredient);
router.get('/', getIngredients);

module.exports = router;