require('dotenv').config()
const mongoose=require('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
.then(console.log("connection success"))
.catch((err)=>{
    console.log(`connection error:${err}`)
})