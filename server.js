require('dotenv').config();
const express = require('express');
const app = express();

// Middlewares
app.use(express.json());
app.use(require('./middlewares/logger'));

// Routes
app.use('/api', require('./routes/protected'));

// Error handler (MUST be last)
app.use(require('./middlewares/errorHandler'));

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});