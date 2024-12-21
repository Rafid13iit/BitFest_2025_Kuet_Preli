const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI("AIzaSyDm-ogFR47rNUdX8aXFKYuXWL7TytpipRo");
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const chatWithBot = async (req, res) => {
  try {
    const { preference } = req.body;
    const result = await model.generateContent(preference);
    const response = await result.response;
    const text = response.text();
    console.log(text);
    res.status(200).json({ suggestion: text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { chatWithBot };