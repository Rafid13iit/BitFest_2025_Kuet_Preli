const express = require('express');
const { addRecipe } = require('../controllers/recipeController');
const router = express.Router();

router.post('/', addRecipe);

module.exports = router;