const express = require('express');
const cors = require('cors');
const { createTodo, updateTodo } = require("./types");
const { todo } = require('./db');
const app = express();

app.use(express.json());
app.use(cors());

app.post('/todo', async (req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload); // with this line we just made the input validation happen from whteva we got from req.body

    if(!parsedPayload.success){
        res.status(411).json({ message: "You sent the wrong inputs!"})
        return;
    }
    
    // put in mongodb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description
    })

    res.json({
        message: "Todo created"
    })

});

app.get('/todos', async (req,res)=>{
    const todos = await todo.find({}); // this it returns a promise

    res.json({
        todos
    })
})

app.put("/completed", async (req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if(!parsedPayload.success){
        res.status(411).json({ message: "You sent the wrong inputs!"})
        return;
    }

    await todo.update({
        _id: req.body.id // as we know it was automatically created by mongo
    }, {
        completed: true
    })

    res.json({
        message: "Todo marked as completed"
    })
})


app.listen(3000);