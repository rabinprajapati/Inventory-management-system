const { urlencoded } = require('body-parser');
const express=require('express');
const hbs=require('hbs')
const path=require('path')
const cookieparser=require('cookie-parser')
const viewPath=path.join(__dirname,'./templates/views')
const partialsPath=path.join(__dirname,'./templates/partials')

const app=express();
require('./db/conn')

//middlewares
app.use(express.json())
app.set('view engine','hbs');
app.set('views',viewPath)
app.use(cookieparser())
hbs.registerPartials(partialsPath);
app.use(urlencoded({extended:false}))

//routes
const userRoute=require('./Routes/userRoute')
const productRoute=require('./Routes/productRoute')
app.use('/user',userRoute);
app.use('/product',productRoute);


app.listen(3000,()=>{
    console.log('listenning to port 3000')
})