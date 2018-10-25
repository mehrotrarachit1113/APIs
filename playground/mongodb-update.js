const {MongoClient , ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/ToDoApp' ,(err , db) =>{
    if(err)
        return console.log('The connection wasn\'t established')
    console.log('The connection with the datbase was esatblished')

    db.collection('Todo').findOneAndUpdate({
        _id = new ObjectID('5bd1d191264f408931c0d04e')
    },{
        $set:{
            lastName : 'lastName'
        }
    }),{
        returnOriginal : false
    }.then((result) => {
        console.log(JSON.stringify(result))
    });
});