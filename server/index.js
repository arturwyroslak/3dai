```javascript
const express = require('express');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const security = require('./utils/security');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(security);

// API Routes
app.use('/api', apiRoutes);

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
```