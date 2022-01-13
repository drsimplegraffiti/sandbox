const express = require('express');
const { all } = require('express/lib/application');
const app = express()
const pool = require('./db')


app.use(express.json())


//Routes
//post
app.post('/todos', async(req,res)=>{
    try {
        const {description} = req.body;
        const createTodo = await pool.query('INSERT INTO todo(description) VALUES ($1) RETURNING *', [description])
        return res.status(201).json(createTodo.rows[0])
    } catch (error) {
        console.error(error.message)
    }
})

//Get all todos
app.get('/todos', async(req,res)=>{
    try {
        const allTodos = await pool.query('SELECT * FROM todo')
        return res.status(200).json(allTodos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

//Get a todo by id
app.get('/todos/:id', async(req,res)=>{
    const { id } = req.params;
    try {
        const todo = await pool.query('SELECT * FROM todo WHERE todo_id = $1', [id])
        return res.status(200).json(todo.rows[0])

    } catch (error) {
        console.error(error.message)
    }
})

//Update Todos
app.put('/todos/:id', async(req,res)=>{
    const {id} = req.params; //WHERE FUNC
    try {
        const {description}= req.body; //SET FUNC
        const updateTodo = await pool.query('UPDATE todo SET description = $1 WHERE todo_id = $2', [description, id])
        return res.status(200).json('Todo successfully updated');        
    } catch (error) {
        console.error(error.message)
    }
})

//Delete todos
app.delete('/todos/:id', async(req,res)=>{
    const {id} = req.params; //WHERE FUNC
    try {
        const deleteTodo = await pool.query('DELETE FROM todo WHERE todo_id = $1', [id])
        return res.status(204).json('Deleted')
    } catch (error) {
        console.error(error.message)
    }
})


app.listen(6787, ()=>{
    console.log('app is live and running.....port:6787')
})