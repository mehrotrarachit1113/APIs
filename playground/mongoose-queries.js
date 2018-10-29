const {ObjectID} = require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

//var id = '6bd3517d6f7a161834b62eb66'
var id = '5bd08b45fff54d4614ced721'

// if(!ObjectID.isValid(id)) {
//     console.log('The object ID is invalid')
// }

User.findById(id).then((user) => {
    console.log(user)
}).catch((e) => {
    console.log(e)
})

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log(todos)
// })

// Todo.findOne({
//     _id : id
// }).then((todo) => {
//     console.log(todo)
// })

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('It was not found')
//     }
//         console.log('Find by id' , todo)
// }).catch((e) => {
//     console.log(e)
// })
