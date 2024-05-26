const productModel = require('../models/product.model');


const productContollor = {
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
    getProduct: (req, res) => {
        productModel.findById(req.params.productId).then(product => {
            res.status(200);
            res.send({ product })
        }).catch(error => {
            res.status(500);
            res.send({
                errorDescription: "Product not found",
                error
            });
        })
    },
    getAllProducts: (req, res) => {
        productModel.find().then(products => {
            res.status(200);
            res.send({ products });
        }).catch(error => {
            res.status(500);
            res.send({ error });
        });

    }
}

module.exports = productContollor;