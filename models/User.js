require('dotenv').config()
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken');

const mongoose=require('mongoose');

const userSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
        minlength:5
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
   
})

userSchema.pre('save',async function(next){
    try {

        const salt=await bcrypt.genSalt();
        this.password=await bcrypt.hash(this.password,salt);
        next();
    } catch (error) {
        console.log(`hasing error:${error}`)
    }
})


userSchema.methods.generateToken=async function(){
    const token=await jwt.sign({_id:this._id},process.env.SECRET_KEY)
    this.tokens=this.tokens.concat({token})
    await this.save();
                return token;
}

const User=mongoose.model('User',userSchema);

module.exports=User;