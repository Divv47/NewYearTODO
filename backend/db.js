/*
* Todo {
    title: string;
    description: string;
    completed: boolean
}
*/

const mongoose = require("mongoose")
mongoose.connect("mongodb+srv://divyanshvairagade:divyansh1211@cluster47.ft8ey.mongodb.net/")

const todoSchema = mongoose.Schema({
    title :String,
    description :String,
    completed: Boolean
})

const todo = mongoose.model('todo', todoSchema);
module.exports ={
    todo
}