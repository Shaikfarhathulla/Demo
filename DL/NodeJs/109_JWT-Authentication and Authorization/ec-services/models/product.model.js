const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: 'String'
    },
    imgSrc: {
        type: 'String'
    },
    price: {
        type: 'Number'
    },
    discountPercentage: {
        type: 'Number'
    },
    specifications: [{
        type: 'String'
    }],
    availableQuantity: {
        type: 'Number'
    },
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'suppliers'
    }
});

const productModel = mongoose.model('products', productSchema);

module.exports = productModel;