const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://bijjahimanshu05:Explore-MongoDB@cluster0.g0j9e.mongodb.net/todo")


const tosoSchema = mongoose.Schema({
    title : String,
    description : String,
    completed : Boolean
});

const todo = mongoose.model('todos', tosoSchema);

module.exports = {
    todo
}

