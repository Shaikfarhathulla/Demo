const supplierModel = require('../models/supplier.model');

const suppliersService = {
    create: (data) => {
        const supplier = new supplierModel(data);
        return supplier.save();
    },
    get: () => {
        return supplierModel.find();
    },
    getById: (id) => {
        return supplierModel.findById(id);
    },
    update: (id, data) => {
        return supplierModel.findByIdAndUpdate(id, data, { new: true });
    },
    delete: (id) => {
        return supplierModel.findByIdAndDelete(id);
    },
    getByEmailOrMobileNo: (emailOrMobileNo) => {
        return supplierModel.findOne({ $or: [
                { mobileNo: emailOrMobileNo },
                { email: emailOrMobileNo }
            ] 
        });
    },
};

module.exports = suppliersService;