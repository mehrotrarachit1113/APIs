const {ObjectId} = require('mongodb')
const Todo = require('./../server/models/todo')
const User = require('./../server/models/user')
const mongoose = require('./../server/db/mongoose')

Todo.remove({}).then((result) => {
    console.log('all deleted')
})