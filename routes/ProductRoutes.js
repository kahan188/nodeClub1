const router = require('express').Router
const productController = require('../controller/ProductController')
const productSchemaValidation = require('../util/ProductSchemaValidation');
const zodMiddleware = require('../middleware/ZodMiddleware');
router.post('/product',zodMiddleware.validate(productSchemaValidation),productController.createProduct)
module.exports = router;