const express = require('express');
const PropertyModel = require('../models/propertyModel');
const auth = require('../middleware/auth');
const Property = require('../controllers/propertyController');
const router = new express.Router();

router.post('/properties',auth,Property.createProperty);
router.get('/properties/all', auth,Property.getByUser);
router.get('/properties/:id', auth,Property.getById);
router.delete('/properties/all', auth,Property.deleteByUser)
router.delete('/properties/:id', auth,Property.deleteById);
router.patch('/properties/:id', auth,Property.updateById);
module.exports = router