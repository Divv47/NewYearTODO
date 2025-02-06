const express = require('express')
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
//const cors = require("cors");
const app = express();

app.use(express.json())

app.post("/todos",async function(req,res){
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.send(411).json({
            msg: "You send the wrong inputs",
        })
        return;
    }
    //put in MongoDB
    await todo.create({
        title:createPayLoad.title,
        description:createPayLoad.description,
        completed : false,
    })
})

app.get("/todos",function(req,res){
    const todos = todo.find({

    })
    console.log(todos);
    
})

app.put("/completed",async function(req,res){
    const updatePayload = req.body;
    const parsePayLoad = updatePayload.safeParse(updatePayload)
    if(!parsePayLoad.success){
        res.send(411).json({
            msg:"You send the wrong inputs",
        })
        return;
    }
    await todo.update({
        _id : req.body.id
    },{
        completed : true
    })
    res.json({
        msg: "todo marked as completed"
    })
})
app.listen(3000, () => console.log("Server running"));