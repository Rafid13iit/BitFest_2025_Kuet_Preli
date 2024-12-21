const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  ingredients: { type: String, required: true },
  cuisine: { type: String },
  taste: { type: String },
  prep_time: { type: Number },
  reviews: { type: String },
});

module.exports = mongoose.model('Recipe', recipeSchema);