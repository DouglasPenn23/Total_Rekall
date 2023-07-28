// server.js
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Step 2a: Set Up MongoDB Connection
const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/total_rekall'; // Replace with your MongoDB connection URI

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Step 2b: Define Routes and Middleware (to be added in later steps)

// Step 2c: Start the Server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
