const mongoose = require('mongoose')

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://127.0.0.1/27017/trial')

var trial = mongoose.model('trial' , {
    text : {
        type : String,
        required : true,
        minLength : 1,
        trim : true
    },
    completed : {
        type : Boolean,
        default : false
    },
    completedAt : {
        type : Number,
        default : null
    }
});

//Creating the instances of the schema
var firstTry = new trial({
    text : 'Test1',
    completed : 'True',
    completedAt : 1
})

var secondTry = new trial({
    text : 'Test2',
    completed : 'true',
    completedAt : 2 
})

//Saving those instances in the db and pritning them with the implementation of promise
  secondTry.save().then((doc) => {
    console.log(doc)
},(e) =>{
    console.log(e)
})

firstTry.save().then((doc) => {
    console.log('Saved ' , doc)
    },(e) => {
        console.log(e)
    })

// Another schema 

var user = mongoose.model('user',{
    emailId : String,
    minLength : 1,
    trim : true,
    require : true
})

//Creating the instance of the user Schema
var userFirstCreation = new user({
    emailId : 'test@yopmail.com'
})


//Saving the data about the user
userFirstCreation.save().then((result) =>{
    console.log('Done')
},(e) => {
    console.log('Not Done')
})