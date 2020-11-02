//CRUD Create Read Update Delete  

const mongodb=require('mongodb')
const MongoClient=mongodb.MongoClient
// const ObjectID=mongodb.ObjectID

const connectionURL=process.env.MONGODB_URL
const databaseName='task-manager'
console.log('Connected')

// const id=new ObjectID()
// console.log(id)
// console.log(id.getTimestamp())

MongoClient.connect(connectionURL, {useNewUrlParser:true},function(error,client){
    if(error){
        return console.log('Unable to connect')
    }
    
    const db=client.db(databaseName)

    db.collection('users').insertOne({
        name:'Poorva',
        age: 21
    },function(error,result){
        if(error){
            return console.log("cant insert")
        }
        console.log(result.ops)
    })
            
})
MongoClient.connect()