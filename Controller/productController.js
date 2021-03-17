const { findById } = require('../models/Product');
const Product=require('../models/Product')

module.exports.home=(req,res)=>{
    res.render('product');
}

module.exports.productPage=(req,res)=>{
    res.render('addProduct');
}

module.exports.addProduct=async(req,res)=>{
    try {
            const product=new Product(req.body)
            await product.save();
            console.log('product inserted')
            res.render('product')
    } catch (error) {
        console.log(`product entry errrrrror:${error}`)
    }

}

module.exports.showProducts=async(req,res)=>{
    try {
        const products=await Product.find();
        res.render('product',{products})
    } catch (error) {
        console.log(`produts dekhauda errrrror:${error}`)
    }
}

module.exports.deleteProduct=async(req,res)=>{
    try {
        
        await Product.findByIdAndDelete(req.params.id)
            .then(console.log('deleted data'))
            .catch((err)=>{
            console.log('couldnot delete data')
            });
            res.render('product');
    } catch (error) {
        console.log('dddddddddeeeeeeeeeeelllllllllete error')
    }
}

module.exports.updateProduct=async(req,res)=>{
    try {
        const id=req.params.id;
        const product=findById(id);
        //const product=await Product.findByIdAndUpdate(id,req.body);
        //res.send(product)
        res.render('editProduct',{product})
    } catch (error) {
        console.log('upddddddddddddddddddddate error')
    }
}