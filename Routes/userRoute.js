const express=require('express');
const auth=require('../middleware/auth')


const router=express.Router();

//controller
const userController=require('../Controller/userController')


router.get('/',userController.loginpage)
router.get('/home',auth,userController.home)
router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.get('/showUsers',auth,userController.showUsers)
router.get('/logout',auth,userController.logoutUser)

module.exports=router;