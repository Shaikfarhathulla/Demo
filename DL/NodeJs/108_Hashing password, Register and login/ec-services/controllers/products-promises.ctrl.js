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
            if (product) {
                res.status(200);
                res.send({
                    status: 'Retrieved product successfully',
                    data: product
                });
            } else {
                res.status(404);
                res.send({
                    status: "Product doesn't exist with this id."
                })
            }
        }).catch(error => {
            res.status(500);
            res.send({
                error
            });
        });
    },
    update: (req, res) => {
        productModel.findByIdAndUpdate(req.params.id, req.body, { new: true }).then(product => {
            res.status(200);
            res.send({
                status: 'Update successfully',
                data: product
            });
        }).catch(error => {
            res.status(500);
            res.send({ error });
        });
    },
    patch: (req, res) => {
        productModel.findById(req.params.id).then(product => {
            for (const key in req.body) {
                product[key] = req.body[key];
            }
            productModel.findByIdAndUpdate(req.params.id, product, { new: true }).then(updatedProduct => {
                res.status(200);
                res.send({
                    status: 'Update successfully',
                    data: updatedProduct
                });
            }).catch(error => {
                res.status(500);
                res.send({ error });
            });
        }).catch(error => {
            res.status(500);
            res.send({ error });
        });
    },
    deleteProduct: (req, res) => {
        productModel.findByIdAndDelete(req.params.id).then(product => {
            res.status(200);
            res.send({
                status: 'Deleted product successfully',
                data: product
            });
        }).catch(error => {
            res.status(500);
            res.send({ error });
        });
    }
};

module.exports = productCtrl;