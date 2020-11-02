const mongoose=require('mongoose')

mongoose.connect(process.env.MONGODB_URL,{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})



// const Task= mongoose.model('Task',{
//     description:{
//         type:String,
//         required:true
//     },
//     completed:{
//         type:Boolean,
//         default:false
//     }
// })
