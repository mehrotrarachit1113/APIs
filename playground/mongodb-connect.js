const {MongoClient , ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp' , (err , db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }

    console.log('Connected to Mongo Server');
    
    //Inserting the doc in the collection Todo
    // db.collection('Todo').insertOne({
    //     firstName : 'Rachit',
    //     lastName : 'Mehrotra'
    // }, (err , result) =>{
    //     if(err) {
    //         console.log('The document was not added to the collection');
    //     }
    //     console.log(JSON.stringify(result.ops , undefined , 2))
    // });

    //Inserting the doc in the collection User
    db.collection('User').insertOne({
        firstName : 'Rachit',
        lastName : 'Mahan'
    } , (err , result) =>{
        if(err)
            console.log('Unable to insert the document in the collection')
        console.log(JSON.stringify(result.ops[0]._id.getTimestamp()))
    });

    db.close();
});