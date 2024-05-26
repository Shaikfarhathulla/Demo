const express = require('express');
const router = express.Router();

const authorizationService = require('../middlewares/authorization.mdw');

const supplierCtrl = require('../controllers/suppliers.ctrl');

router.post('/login', supplierCtrl.login);
router.post('/valid-password', supplierCtrl.validatePassword);
router.post('/', supplierCtrl.register);
router.get('/', authorizationService.authorize, supplierCtrl.getAll);
router.get('/:id', authorizationService.authorize, supplierCtrl.getById);
router.put('/:id', authorizationService.authorize, supplierCtrl.update);
router.patch('/:id', authorizationService.authorize, supplierCtrl.patch);
router.delete('/:id', authorizationService.authorize, supplierCtrl.deleteSupplier);

module.exports = router;