const expect = require('expect')
const request = require('supertest')

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

beforeEach((done) => {
    Todo.remove({}).then(() => {
        done()
    });
});

describe('POST /todos' , () => {
    it('should create a new todo' ,(done) => {
        var text = 'Test todo text';

        request(app)
        .post('/todos')
        .send()
        .expect(200)
        .expect((res) => {
            expect(res.body.text).toBe(text)
        })
        .end((err , res) => {
            if(err){
                return err(done)
            }

            Todo.find().then((todos) => {
                expect(todos.length).toBe(1)
                expect(todos[0].text).toBe(text)
                done()
            }).catch((e) =>{
                    done(e)
            })
        })
    });
});