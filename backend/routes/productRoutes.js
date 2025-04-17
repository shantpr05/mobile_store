const express = require('express');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth'); // or './authenticate'
const router = express.Router();
const { getProducts, 
        newProduct,
        getSingleProduct,
        updateProduct,
        deleteProduct
    } = require('../controllers/productController');
    

router.get('/', getProducts);
router.post('/', newProduct);

router.get('/:id', getSingleProduct);
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)

module.exports = router;
