const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: [true, 'Please provide a brand name'],
    trim: true
  },
  model: {
    type: String,
    required: [true, 'Please provide a model name'],
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Please provide a price']
  },
  specifications: {
    ram: {
      type: String,
      required: [true, 'Please specify RAM']
    },
    storage: {
      type: String,
      required: [true, 'Please specify storage']
    },
    battery: {
      type: String,
      required: [true, 'Please specify battery']
    },
    processor: {
      type: String,
      required: [true, 'Please specify processor']
    },
    display: {
      type: String,
      required: [true, 'Please specify display type']
    }
  },

  image: {
    type: String,
    required: [true, 'Please provide an image URL']
  }
  
}, {
  timestamps: true
});

const schema = mongoose.model('Product', productSchema);

module.exports = schema;
