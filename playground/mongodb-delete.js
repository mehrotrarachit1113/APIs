const {MongoClient , ObjectID} = require('mongodb')

MongoClient.connect("mongodb://127.0.0.1:27017/TodoApp" , (err , db) =>{
    if(err)
      return console.log('The connection with the mongodb wasn\'t established')
    console.log('The connection was successfully established')

    db.collection('Todo').deleteMany({lastName : 'Mehrotra'}).then((result) => {
        console.log(JSON.stringify(result))
    })
})