var express = require('express');
var router = express.Router();
var createError = require('http-errors');



// create an in memory array of todos
const todos = [{
    id: 1,
    name: 'Do something',
    completed: false
}]


/**  *GET all todo*/
router.get('/', (req, res, next) => {
    return res.json(todos);
});


/* GET specific Id */
router.get('/:id', (req, res, next) => {
    const foundTodo = todos.find(todo => todo.id === Number(req.params.id));
    if (!foundTodo) {
        next(createError(404, 'Not Found'))
    }
    return res.json(foundTodo)
});

/* Create Todo */
router.post('/', (req, res, next) => {
    const { body } = req;
    if (typeof body.name !== 'string') {
        return next(createError(422, 'Validation Error'));
    }
    const newTodo = {
        id: todos.length + 1,
        name: body.name,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo)
})


module.exports = router;