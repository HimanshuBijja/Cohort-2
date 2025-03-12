const express = require("express");
const app = express();
const cors = require("cors")

const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");

app.use(express.json());
app.use(cors());

app.post('/todo',  async (req,res) => {
    // const title = req.body.title;
    const createPayload = req.body;
    const parsedpayload = createTodo.safeParse(createPayload);

    if(!parsedpayload.success){
        res.status(411).json({
            msg : "invalid inputs"
        })

        return;
    }

    await todo.create({
        title : req.body.title,
        description : req.body.description,
        completed : false
    });

    res.json({
        msg : "To-Do has been created"
    })
    // console.log(response);
});


app.get('/todos', async (req,res) => {
    const todos = await todo.find({})

    res.json({
        todos
    })

    
}); 



app.put('/completed',  async (req,res) => {

    const completedPayload = req.body;
    const parsedpayload = updateTodo.safeParse(completedPayload);

    if(!parsedpayload.success){
        res.status(411).json({
            msg : "Invalid inputs"
        })

        return;
    }

    await todo.updateOne({
        _id : req.body.id
    }, {
        completed : true
    })
    
    res.json({
        msg : "Updated todo"
    })

});

app.listen(3000, ()=>{
    console.log(`listening on ${3000}`)
});