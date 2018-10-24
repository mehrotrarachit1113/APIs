const {MongoClient , ObjectId} = require('mongodb')

MongoClient.connect('mongodb://127.0.0.1/TodoApp' , (err , db) => {
    if(err){
        return console.log('The connection with MongoDb wasn\'t succesfully established')
    }
    console.log('The connection was successfully established')
    
    db.collection('Todo').find({firstName : 'Rachit'}).count().then((docs) =>{
        console.log('TodoApp');
        console.log(JSON.stringify(docs , undefined , 2))
    } , (err) => {
        console.log(`${err}`);
    });
    //db.close()
});