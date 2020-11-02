const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

// const Task = require('./models/task')
// const User = require('./models/user')

// const main = async () => {
//     // const task = await Task.findById('5c2e505a3253e18a43e612e6')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     // const user = await User.findById('5c2e4dcb5eac678a23725b5b')
//     // await user.populate('tasks').execPopulate()
//     // console.log(user.tasks)
// }

// main()

// const jwt= require('jsonwebtoken')

// const myFun= async ()=>{
//     const token= jwt.sign({_id:'shdij'},'myLiitleSecret',{expiresIn:'1 minute'})
//     console.log(token)


//     const data= jwt.verify(token,'myLiitleSecret')
//     console.log(data)
// }

// myFun()
// const bcrypt = require('bcryptjs')


// const hashFun = async ()=>{
//     const pass='Patriot@11'
//     const hashPass= await bcrypt.hash(pass,8)
//     console.log(pass)
//     console.log(hashPass)
//     const isPass='Patriot@11'
//     const ans=await bcrypt.compare(isPass,hashPass)
//     console.log(ans)
// }

// hashFun()









// const express=require('express')
// const Task = require('./models/task')
// require('./db/mongoose')
// const User=require('./models/user')


// const app=express()
// const port= process.env.port || 3000

// app.use(express.json())



// app.post('/tasks',async function(req,res){
//     const task= await new Task(req.body)
//     try{
//         await task.save()
//         res.status(201).send(task)
//     }catch(e){
//         res.status(400).send(e)
//     }

//     // const task1=new Task(req.body)
//     // task1.save().then(() => {
//     //         res.status(201).send(task1)
//     // }).catch((e)=>{
//     //     res.status(400)
//     //     res.send(e)
//     // })

// })


// app.get('/tasks',(req,res)=>{
//     // Task.find({}).then((tasks)=>{
//     //     res.send(tasks)
//     // }).catch((e)=>{
//     //     res.status(500).send(e)
//     // })
// })
// app.get('/tasks/:id',async (req, res) => {
//     const _id = req.params.id

//     try{
//         const task=await Task.findById(_id)
//         if(!task){
//             return res.status(404).send()
//         }else{
//             return res.status(200).send(task)
//         }
//     }catch(e){
//         return res.status(500).send()
//     }
//     // Task.findById(_id).then((task) => {
//     //     if (!task) {
//     //         return res.status(404).send()
//     //     }

//     //     res.send(task)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })


// app.post('/users',async function (req,res){
//     const user1=new User(req.body)
//     try{
//         await user1.save()                      
//         res.status(201).send(user1)
//     }catch(e){
//         res.status(400).send(e)
//     }


//     // user1.save().then(function(){
//     //     res.send(user1)
//     // }).catch(function(e){
//     //     res.status(400)
//     //     res.send(e)
//     // })
// })


// app.get('/users',async (req,res)=>{
    
//     try{
//         const users=await User.find({})
//         res.send(users)
//     }catch(e){
//         res.status(500).send(e)
//     }
//     // User.find({}).then(function(users){
//     //     res.send(users)
//     // }).catch((e)=>{
//     //     res.status(500).send(e)
//     // })
// })


// app.get('/users/:id',async (req, res) => {
//     const _id = req.params.id
//     try{

//         const user1=await User.findById(_id)
//         if(!user1){   
//             return res.status(404).send()
//         }else{
//             return res.status(200).send(user1)
//         }

//     }catch(e){
//         return res.status(500).send(e)
//     }


//     // User.findById(_id).then((user) => {
//     //     if (!user) {
//     //         return res.status(404).send()
//     //     }

//     //     res.send(user)
//     // }).catch((e) => {
//     //     res.status(500).send()
//     // })
// })

// app.patch('/users/:id',async (req,res)=>{
//     try{
//         const user=await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators: true})
//         if(!user){
//             return res.status(404).send()
//         }else{
//             return res.send(user)
//         }

//     }catch(e){
//         return res.status(400).send(e)
//     }
// })
// app.delete('/users/:id',async (req,res)=>{
    
//     try{
//         const user=await User.findByIdAndDelete(req.params.id)
//         if(!user){
//             return res.status(404).send()
//         }
//         return res.send(user)
//     }catch(e){
//         return res.status(400).send(e)
//     }
// })

// app.listen(port,function(){
//     console.log('Server is up on port')
// })
