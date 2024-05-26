const productModel = require('../models/product.model');

const productCtrl = {
    create: (req, res) => {
        const product = new productModel(req.body);
        product.save().then(createdProduct => {
            res.status(201);
            res.send({
                status: 'Created product successfully',
                data: createdProduct
            });
        }).catch(error => {
            res.status(500);
            res.send({
                error
            });
        });
    },
    getAll: (req, res) => {
        productModel.find().then(products => {
            res.status(200);
            res.send({
                status: 'Retrieved products successfully',
                data: products
            });
        }).catch(error => {
            res.status(500);
            res.send({
                error
            });
        });
    },
    getById: (req, res) => {
        productModel.findById(req.params.id).then(product => {
            res.status(200);
            res.send({
                status: 'Retrieved product successfully',
                data: product
            });
        }).catch(error => {
            res.status(500);
            res.send({
                error
            });
        });
    }
};

module.exports = productCtrl;