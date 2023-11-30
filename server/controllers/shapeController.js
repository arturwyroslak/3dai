```javascript
const openAIService = require('../services/openAIService');
const shapeParameters = require('../utils/shapeParameters');

exports.generateShape = async (req, res) => {
    try {
        const description = req.body.description;
        const shapeData = await openAIService.analyzeText(description);
        const parameters = shapeParameters(shapeData);
        res.status(200).json(parameters);
    } catch (error) {
        res.status(500).json({ error: 'Error generating shape parameters' });
    }
};
```