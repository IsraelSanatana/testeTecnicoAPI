const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String
});

module.exports = mongoose.model('Produto', produtoSchema);
