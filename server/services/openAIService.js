```javascript
const axios = require('axios');
const { shapeParameters } = require('../utils/shapeParameters');

const OPENAI_API_URL = 'https://api.openai.com/v1/engines/davinci-codex/completions';
const OPENAI_API_KEY = 'YOUR_OPENAI_API_KEY'; // Replace with your actual OpenAI API Key

const openAIService = {
  analyzeText: async (text) => {
    try {
      const response = await axios.post(
        OPENAI_API_URL,
        {
          prompt: text,
          max_tokens: 60,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${OPENAI_API_KEY}`
          }
        }
      );

      const data = response.data.choices[0].text.trim();
      const parameters = shapeParameters(data);
      return parameters;
    } catch (error) {
      console.error(`Error in OpenAI Service: ${error}`);
      throw error;
    }
  },
};

module.exports = openAIService;
```