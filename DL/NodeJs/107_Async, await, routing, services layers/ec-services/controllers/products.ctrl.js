const productModel = require('../models/product.model');
const productsService = require('../services/products.svc');

const productCtrl = {
    create: async (req, res) => {
        try {
            const createdProduct = await productsService.create(req.body);
            res.status(201);
            res.send({
                status: 'Created product successfully',
                data: createdProduct
            });
        } catch(error) {
            res.status(500);
            res.send({
                error
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const products = await productsService.get();
            res.status(200);
            res.send({
                status: 'Retrieved products successfully',
                data: products
            });
        } catch(error) {
            res.status(500);
            res.send({
                error
            });
        }
    },
    getById: async (req, res) => {
        try {
            const product = await productsService.getById(req.params.id);
            res.status(200);
            res.send({
                status: 'Retrieved product successfully',
                data: product
            });
        } catch(error) {
            res.status(500);
            res.send({
                error
            });
        }
    },
    update: async (req, res) => {
        try {
            const updatedProduct = await productsService.update(req.params.id, req.body);
            res.status(200);
            res.send({
                status: 'Updated successfully',
                data: updatedProduct
            });
        } catch(error) {
            res.status(500);
            res.send({
                error
            });
        }
    },
    patch: async (req, res) => {
        try {
            const product = await productsService.getById(req.params.id);
            for (const key in req.body) {
                product[key] = req.body[key];
            }
            const updatedProduct = await productsService.update(req.params.id, product);
            res.status(200);
            res.send({
                status: 'Update successfully',
                data: updatedProduct
            });
        } catch(error) {
            res.status(500);
            res.send({
                error
            });
        }
    },
    deleteProduct: async (req, res) => {
        try {
            const deletedProduct = await productsService.delete(req.params.id);
            res.status(200);
            res.send({
                status: 'Deleted product successfully',
                data: deletedProduct
            });
        } catch(error) {
            res.status(500);
            res.send({ error });
        }
    }
};

module.exports = productCtrl;