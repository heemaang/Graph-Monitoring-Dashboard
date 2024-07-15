// server/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoute = require('./routes/auth');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', authRoute);

// Example data endpoint
app.get('/api/data', (req, res) => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May'],
    values: [65, 59, 80, 81, 56],
  };
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
