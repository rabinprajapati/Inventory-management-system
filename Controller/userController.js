const User=require('../models/User')
const bcrypt=require('bcrypt');

module.exports.loginpage=(req,res)=>{
    res.render('login');
}

module.exports.home=(req,res)=>{
    res.render('index')
}

module.exports.userRegister=async(req,res)=>{
    try {
        const user=new User(req.body);
         const token=await user.generateToken();
         res.cookie('jwt',token);
 await user.save();
 console.log('data inserted')
 res.render('index')
    } catch (error) {
        console.log(`registeeeeeeerrrrr    errrrrrr:${error}`)
    }
 
}

module.exports.userLogin=async(req,res)=>{
    try {
        const{email,password}=req.body;
    const user=await User.findOne({email});
    const match=await bcrypt.compare(password,user.password);
    console.log(match)
   
    if(!match){
         const token=await user.generateToken();
        console.log(`toooooken is:${token}`)
        res.cookie('jwt',token);
        res.render('index')
    }
    else{
        res.send('password milena')
    }
    } catch (error) {
        //console.log(`login error:${error}`)
         res.send('password milena login error')
    }

}

module.exports.showUsers=async(req,res)=>{
    try {
        const users=await User.find();
    res.render('showUser',{users})
    console.log(`coooookie value:${req.cookies.jwt}`)
    } catch (error) {
        console.log(error)
    }
    
}

module.exports.logoutUser=async(req,res)=>{
    try {
        res.clearCookie('jwt');
        req.user.tokens=[]
        req.user.save();

    console.log('logout success')
    res.render('login')
    } catch (error) {
        console.log(error)
    }
}