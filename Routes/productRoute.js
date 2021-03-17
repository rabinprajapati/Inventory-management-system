const express=require('express');
const auth=require('../middleware/auth')
const productController=require('../Controller/productController')

const router=express.Router();

router.get('/',auth,productController.home)
router.get('/addProduct',productController.productPage)
router.post('/addProduct',productController.addProduct)
router.get('/product',auth,productController.showProducts)
router.delete('/delete/:id',auth,productController.deleteProduct)
router.patch('/update/:id',productController.updateProduct)

module.exports=router;
