const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';
const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

const getRecipeSuggestions = async (preference, availableIngredients) => {
  try {
    // Format the prompt for better recipe suggestions
    const prompt = `Given these ingredients: ${availableIngredients.join(', ')}
    And this preference: ${preference}
    Please suggest some recipes I can make. For each recipe, include:
    - Recipe name
    - Required ingredients
    - Basic cooking instructions
    - Approximate cooking time`;

    const payload = {
      contents: [
        {
          parts: [{ text: prompt }]
        }
      ]
    };

    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      payload,
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );

    return {
      success: true,
      suggestions: response.data.candidates[0].content.parts[0].text
    };

  } catch (error) {
    console.error('Error getting recipe suggestions:', error.message);
    return {
      success: false,
      error: error.response?.data?.error?.message || 'Failed to get recipe suggestions'
    };
  }
};

module.exports = { getRecipeSuggestions };