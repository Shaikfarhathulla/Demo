const express = require('express');
const router = express.Router();

const productCtrl = require('../controllers/products.ctrl');

router.post('/', productCtrl.create);
router.get('/', productCtrl.getAll);
router.get('/:id', productCtrl.getById);
router.put('/:id', productCtrl.update);
router.patch('/:id', productCtrl.patch);
router.delete('/:id', productCtrl.deleteProduct);


module.exports = router;