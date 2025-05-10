import express from "express";
const app = express();
import { PrismaClient } from "../generated/prisma";
import bcrypt from "bcrypt"
import { error, log } from "console";
import { hash } from "crypto";
const client = new PrismaClient();

app.use(express.json());

app.get('/users/:id', async(req, res)=>{
    const id = req.params.id;
    const users = await client.user.findMany({
        where :{
            id : parseInt(id)
        },
        include :{
            todo : true
        }
    })
    // console.log(users)
    res.json({
        users: users
    })
})
app.get('/users', async(req, res)=>{
    const users = await client.user.findMany({
        include :{
            todo : true
        }
    })
    // console.log(users)
    res.json({
        users: users
    })
})

app.post('/signin', async(req, res)=>{
    
    const {username, password, age} = req.body
    const hashedpass =   await bcrypt.hash(password, 12)
    try{

        const user = await client.user.create({
            data : {
                username : username,
                password : hashedpass,
                age : age
            }
        })
        res.json({
            msg : "account created"
        })
        bcrypt.compare("1222", hashedpass, function(err, result){
            log(result);
            console.log(err)
        })
        log(user)
    }catch(e){
        res.json({
            msg : "Error occured",
            err : e instanceof Error ? e.message : String(e)
        })
    }
})


async function createUser() {
  const result = await client.user.findFirst({
    where: {
      id: 1,
    },
    include:{
        todo : true
    }
  });
  console.log(result);
}

async function createTodo() {
    const users = await client.user.findMany()
    console.log(users)
}

// createTodo();
// createUser();


app.listen(3000, ()=>{
    log("connected on 3000")
})