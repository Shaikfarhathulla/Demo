const suppliersService = require('../services/suppliers.svc');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const supplierCtrl = {
    register: async (req, res) => {
        try {
            const hashedPassword = await bcrypt.hash(req.body.password, 5);
            req.body.password = hashedPassword;
            const createdSupplier = await suppliersService.create(req.body);
            res.status(201);
            res.send({
                status: 'Created supplier successfully',
                data: createdSupplier
            });
        } catch(error) {
            res.status(500);
            res.send({
                error
            });
        }
    },
    login: async (req, res) => {
        try {
            const supplierInfo = await suppliersService.getByEmailOrMobileNo(req.body.emailOrMobileNo);
            if (supplierInfo !== null) {
                res.status(200);
                res.send({
                    status: 'Valid mobile no or email address, please proceed with further process.'
                });
            } else {
                res.status(409);
                res.send({
                    error: 'conflict',
                    errorDescription: 'We cannot find an account with that mobile number or email address'
                })
            }
        } catch(error) {
            res.status(500);
            res.send({
                error
            });
        }
    },
    validatePassword: async (req, res) => {
        try {
            const supplierInfo = await suppliersService.getByEmailOrMobileNo(req.body.emailOrMobileNo);
            if (supplierInfo !== null) {
                const isSimilar = await bcrypt.compare(req.body.password, supplierInfo.password);
                if (isSimilar) {
                    const token = await jwt.sign({
                        supplierId: supplierInfo._id,
                        email: supplierInfo.email,
                        mobileNo: supplierInfo.mobileNo,
                        fullName: supplierInfo.firstName + " " + supplierInfo.lastName,
                        role: 'supplier'
                    }, "You can't steel my information present in token.", { expiresIn: '1m'});
                    res.status(200);
                    res.send({
                        status: 'Validated password successfully',
                        token
                    });
                } else {
                    res.status(409);
                    res.send({
                        status: 'Incorrect password, Please use valid password for login.'
                    });
                }
            } else {
                res.status(409);
                res.send({
                    error: 'conflict',
                    errorDescription: 'We cannot find an account with that mobile number or email address'
                })
            }
        } catch(error) {
            console.log(error);
            res.status(500);
            res.send({
                error
            });
        }
    },
    getAll: async (req, res) => {
        try {
            const suppliers = await suppliersService.get();
            res.status(200);
            res.send({
                status: 'Retrieved suppliers successfully',
                data: suppliers
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
            const supplier = await suppliersService.getById(req.params.id);
            res.status(200);
            res.send({
                status: 'Retrieved supplier successfully',
                data: supplier
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
            const updatedProduct = await suppliersService.update(req.params.id, req.body);
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
            const supplier = await suppliersService.getById(req.params.id);
            for (const key in req.body) {
                supplier[key] = req.body[key];
            }
            const updatedProduct = await suppliersService.update(req.params.id, supplier);
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
    deleteSupplier: async (req, res) => {
        try {
            const deletedProduct = await suppliersService.delete(req.params.id);
            res.status(200);
            res.send({
                status: 'Deleted supplier successfully',
                data: deletedProduct
            });
        } catch(error) {
            res.status(500);
            res.send({ error });
        }
    }
};

module.exports = supplierCtrl;