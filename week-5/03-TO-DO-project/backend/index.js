const express = require("express");
const app = express();

const { createTodo, updateTodo } = require("./types");

app.use(express.json());

app.post('/todo', (req,res) => {
    // const title = req.body.title;
    const createPayload = req.body;
    const parsedpayload = createTodo.safeParse(createPayload);

    if(!parsedpayload.success){
        res.status(411).json({
            msg : "invalid inputs"
        })

        return;
    }
    

    

    // res.json({
    //     msg : "sent data successfully"
    // })

    console.log(response);
});
app.get('/todos', (req,res) => {

}); 
app.put('/completed', (req,res) => {

    const completedPayload = req.body;
    const parsedpayload = updateTodo.safeParse(completedPayload);

    if(!parsedpayload.success){
        res.status(411).json({
            msg : "Invalid inputs"
        })

        return;
    }

});

app.listen(3000, ()=>{
    console.log(`listening on ${3000}`)
});