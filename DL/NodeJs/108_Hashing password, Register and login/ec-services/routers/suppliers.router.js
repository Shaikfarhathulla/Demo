const express = require('express');
const router = express.Router();

const supplierCtrl = require('../controllers/suppliers.ctrl');

router.post('/login', supplierCtrl.login);
router.post('/valid-password-otp', supplierCtrl.validatePassword);
router.post('/', supplierCtrl.register);
router.get('/', supplierCtrl.getAll);
router.get('/:id', supplierCtrl.getById);
router.put('/:id', supplierCtrl.update);
router.patch('/:id', supplierCtrl.patch);
router.delete('/:id', supplierCtrl.deleteSupplier);

module.exports = router;