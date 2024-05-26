const mongoose = require('mongoose');

const productSchema = mongoose.Schema({

});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;