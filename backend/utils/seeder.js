const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const path = require('path');
const Product = require('../models/productModel');
const connectDatabase = require('../config/database');

dotenv.config({ path: path.join(__dirname, '../config/config.env') });

connectDatabase();

const products = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/product.json'), 'utf-8'));

const importData = async () => {
  try {
    await Product.deleteMany(); 
    await Product.insertMany(products); 
    console.log('✅ Data Imported!');
    process.exit();
  } catch (err) {
    console.error('❌ Import Failed:', err.message);
    process.exit(1);
  }
};

importData();