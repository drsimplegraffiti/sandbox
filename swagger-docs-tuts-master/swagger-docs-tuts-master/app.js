const express = require('express');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
const morgan = require('morgan');




const app = express();

// swagger options
const swaggerOptions = {
    swaggerDefinition: {
        info: {
            title: 'Book Management Api',
            version: '1.0.0',
            description: 'Book search Api Library',
            contact: {
                name: 'Abayomi Ogunnusi',
                url: 'https://abportfolio.vercel.app/',
                email: 'abayomiogunnusi@gmail.com'
            },
            servers: ["http://localhost:5000"]
        }
    },
    apis: ['*.js'], // or use apis: ['app.js']
};

// define swagger docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
// console.log(swaggerDocs);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));


/**
 * @swagger
 * /books:
 *   get:
 *     description: Get all books
 *     tags: [Books]
 *     responses:
 *      200:
 *        description: Success
 */

// @ routes
app.get('/books', (req, res) => {
    res.send([{
        id: 1,
        title: "dunghill"
    }])
})

/**
 * @swagger
 * /books:
 *   post:
 *     description: Create a new book
 *     tags: [Books]
 *     parameters:
 *     - name: title
 *       description: title of the book
 *       in: formData
 *       required: true
 *       type: string
 *     responses:
 *      201:
 *        description: Created
 */
app.post('/books', (req, res) => {
    res.status(201).send();
})



/**
 * @swagger
 * /books/{id}:
 *  put:
 *    summary: Update the book by the id
 *    tags: [Books]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The book id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Book'
 *    responses:
 *      200:
 *        description: The book was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Book'
 *      404:
 *        description: The book was not found
 *      500:
 *        description: Some error happened
 */

app.put("/:id", (req, res) => {
    res.status(201).send();
});



/**
 * @swagger
 * /books/{id}:
 *   delete:
 *     summary: Remove the book by id
 *     tags: [Books]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The book id
 * 
 *     responses:
 *       200:
 *         description: The book was deleted
 *       404:
 *         description: The book was not found
 */

app.delete("/:id", (req, res) => {
    res.status(201).send();
});


app.listen(5000, () => {
    console.log("listening to server on port 5000");
})