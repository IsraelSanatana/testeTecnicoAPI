const mongoose = require('mongoose');

const produtoSchema = new mongoose.Schema({
  id: Number,
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String
},
	this.collection = 'produto'
);

module.exports = mongoose.model('Produto', produtoSchema);
