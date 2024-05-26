const productModel = require('../models/product.model');

const productsService = {
    create: (data) => {
        const product = new productModel(data);
        return product.save();
    },
    get: () => {
        return productModel.find();
    },
    getById: (id) => {
        return productModel.findById(id);
    },
    update: (id, data) => {
        return productModel.findByIdAndUpdate(id, data, { new: true });
    },
    delete: (id) => {
        return productModel.findByIdAndDelete(id);
    }
};

module.exports = productsService;