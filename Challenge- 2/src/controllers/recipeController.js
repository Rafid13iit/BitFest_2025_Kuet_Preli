const fs = require('fs');
const Recipe = require('../models/recipeModel');

const addRecipe = async (req, res) => {
  try {
    const recipe = new Recipe(req.body);
    await recipe.save();
    const recipeText = `${recipe.name}, ${recipe.ingredients}, ${recipe.cuisine}, ${recipe.taste}, ${recipe.prep_time}, ${recipe.reviews}\n`;
    fs.appendFileSync('my_fav_recipes.txt', recipeText);
    res.status(201).json(recipe);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { addRecipe };