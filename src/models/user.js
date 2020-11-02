//basic version of user model
const validator=require('validator')
const mongoose=require('mongoose')
const bcrypt = require('bcryptjs')
const jwt=require('jsonwebtoken')
const Task = require('./task')

// const { hash } = require('bcryptjs')


const userSchema= new mongoose.Schema({
    name:{
        type: String,
        required:true,
        trim:true
    }, 
    age:{
        type: Number,
        trim:true,
        
        validate(value){
            if(value<0){
              throw new Error('Age is a positive number')
            }
        }
    },
    email:{
        type:String,
        unique:true,
        required:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
              throw new Error('Email invalid!')
            }
        }
    },
    password:{
        type:String,
        required:true,
        minlength: 7,
        trim: true,
        validate(value) {
            if (value.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"')
            }
        }
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }],
    avatar:{
        type:Buffer
    }

},{
    timestamps:true
})

userSchema.virtual('tasks', {
    ref: 'Task',
    localField: '_id',
    foreignField: 'owner'
})

userSchema.methods.toJSON= function(){
    const user=this
    const userObject=user.toObject()
    delete userObject.password
    delete userObject.tokens
    return userObject
}

userSchema.methods.generateAuthToken=async function(){
    const user=this
    const token=await jwt.sign({_id:user._id.toString()},process.env.JWT_SECRET)
    user.tokens = user.tokens.concat({ token })
    await user.save()
    return token

}

userSchema.statics.findByCredentials=async function(email,password){
    const user=await User.findOne({email})
    if(!user){
        throw new Error('failed') 
    }
    const isM=await bcrypt.compare(password,user.password)
    if(!isM){
        
    
        throw new Error('Login failed')
    }
    return user
}

userSchema.pre('remove', async function (next) {
    const user = this
    await Task.deleteMany({ owner: user._id })
    next()
})

userSchema.pre('save',async function(next){
    const user =this

    if(user.isModified('password')){
        user.password=await bcrypt.hash(user.password,8)
    }

    console.log('Just before saving')

    next()
})

const User = mongoose.model('User',userSchema)
module.exports= User



// TO CREATE A USER

// const me =new User({
//     name:'James',
//     age: 21,
//     email:'shdh'
// })

// me.save().then(function(){
//     console.log(me)
// }).catch(function(error){
//     console.log('error',error)
// })   //saves the data returns promise

