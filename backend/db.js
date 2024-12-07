const mongoose = require('mongoose');

mongoose.connect("");

const todoSchmema = mongoose.Schema({
    title: String,
    description: String,
    completed: {
        type: Boolean,
        default: false
    }
});

const todo = mongoose.model('todos', todoSchmema);

module.exports = {
    todo
}