const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const errorMiddleware = require('./middlewares/error')
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const cors = require('cors');

app.use(cookieParser());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json()); // required to parse JSON in requests

app.use('/api/v1/products', require('./routes/productRoutes'));
app.use('/api/v1', require('./routes/authRoutes'));
const path = require('path');
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(errorMiddleware);

module.exports = app;
