const express = require('express')
const app = express();

app.use(express.json())




app.post("/todos",function(req,res){
    const createPayLoad = req.body;
    const parsePayLoad = createTodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.send(411).json({
            msg: "You send the wrong inputs",
        })
        return;
    }
    //put in MongoDB
})

app.get("/todos",function(req,res){

})

app.put("/completed",function(req,res){
    const updatePayload = req.body;
    const parsePayLoad = updatePayload.safeParse(updatePayload)
    if(!parsePayLoad.success){
        res.send(411).json({
            msg:"You send the wrong inputs",
        })
        return;
    }
})
app.listen()