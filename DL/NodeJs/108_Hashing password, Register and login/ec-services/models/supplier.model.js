const mongoose = require('mongoose');

const supplierSchema = mongoose.Schema({
    firstName: {
        type: 'String'
    },
    lastName: {
        type: 'String'
    },
    address: {
        type: 'String'
    },
    email: {
        type: 'String'
    },
    companyName: {
        type: 'String'
    },
    mobileNo: {
        type: 'String'
    },
    password: {
        type: 'String'
    },
    otp: {
        type: 'Number'
    }
});

const supplierModel = mongoose.model('suppliers', supplierSchema);

module.exports = supplierModel;