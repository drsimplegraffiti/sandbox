const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const port = 3001;



//initiate app
const app = express();

// config
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'));



//connect to db
mongoose.connect('mongodb+srv://drsimplegraffiti:admin1234@godan.minj6.mongodb.net/godan-info?retryWrites=true&w=majority', () => {
    console.log('connected to db');
})


//data schema
const itemSchema = {
    title: String,
    description: String
}

//data model
const Item = mongoose.model('Item', itemSchema);

// Read route
app.get('/items', async(req, res) => {
    try {
        const items = await Item.find();
        return res.status(200).json(items)
    } catch (error) {
        console.log(error);
        return res.status(500).json('Server Error')
    }
})

//create route
app.post('/new-item', async(req, res) => {
    try {
        const newItem = new Item({
            title: req.body.title,
            description: req.body.description,
        });
        const savedItem = await newItem.save();
        return res.status(201).json(savedItem)
    } catch (error) {
        console.log(error);
        return res.status(500).json('server error')
    }
})


//delete route
app.delete('/delete/:id', async(req, res) => {
    try {
        const id = req.params.id;
        await Item.findByIdAndDelete({ _id: id });
        return res.status(204).json()
    } catch (error) {
        console.log(error);
        return res.status(500).json('server error')
    }
});



//update
// app.put('/put/:id', async(req, res) => {
//     try {
//         const updatedItem = {
//             title: req.body.title,
//             description: req.body.description,
//         }
//         await Item.findByIdAndUpdate({ _id: req.params.id }, { $set: updatedItem })
//     } catch (error) {
//         console.log(error);
//         return res.status(500).json('server error')
//     }
// })



//update route
app.put("/put/:id", (req, res) => {
    const updatedItem = {
        title: req.body.title,
        description: req.body.description,
    };

    Item.findByIdAndUpdate({ _id: req.params.id }, { $set: updatedItem },
        (req, res, err) => {
            if (!err) {
                console.log("Item updated");
            } else {
                console.log(err);
            }
        }
    );
});


//listen to server
app.listen(port, () => {
    console.log(`SERVER RUNNING ON ${port}`);
})