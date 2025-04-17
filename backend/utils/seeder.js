const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Product = require('../models/productModel');
const connectDatabase = require('../config/database');

// ✅ Load environment variables correctly
dotenv.config({ path: path.join(__dirname, '../config/config.env') });

// ✅ Connect to the database
connectDatabase();

// ✅ Read product data from JSON file
const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/product.json'), 'utf-8'));

// ✅ Import into DB
const importData = async () => {
  try {
    await Product.deleteMany(); // Clear existing products
    await Product.insertMany(products); // Add new ones
    console.log('✅ Data Imported!');
    process.exit();
  } catch (err) {
    console.error('❌ Import Failed:', err.message);
    process.exit(1);
  }
};

// ✅ Run the script
importData();
