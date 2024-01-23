const express = require('express');
const cors = require('cors');
const pool = require('./db');

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// Routes


app.listen(3000, () => {
  console.log("Server running at 5000");
});