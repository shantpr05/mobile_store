const express = require('express');
const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth'); 

const { getProducts, 
        newProduct,
        getSingleProduct,
        updateProduct,
        deleteProduct
    } = require('../controllers/productController');
    
const router = express.Router();

router.get('/', getProducts);
router.get('/:id', getSingleProduct);

router.post('/', isAuthenticatedUser, newProduct);
router.put('/:id', isAuthenticatedUser, updateProduct)
router.delete('/:id', isAuthenticatedUser, deleteProduct)

module.exports = router;

