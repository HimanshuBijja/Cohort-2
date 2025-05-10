const express = require("express");
const  mainRouter  = require("./routes/index");
const cors = require("cors")

const app = express();

app.use(express.json());
app.use(cors({
    origin : "http://localhost:5173"
}));

app.use('/api/v1', mainRouter);

app.listen(3000, ()=>{
    console.log(`connected on port ${3000}`)
})