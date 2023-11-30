```javascript
const express = require('express');
const router = express.Router();
const shapeController = require('../controllers/shapeController');

router.post('/generate', shapeController.generateShape);

module.exports = router;
```