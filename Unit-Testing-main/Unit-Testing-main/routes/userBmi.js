const express = require('express');
const router = express.Router();
const Bmi = require('../models/bmi');


//saving to the database i.e posting
router.post('/api/v1/user/bmi', async(req, res) => {
    try {
        const { name, weight, height } = req.body;
        const newBmi = new Bmi({
            name,
            weight,
            height,
        });
        await newBmi.save();
        return res.status(201).json({
            message: 'success',
            data: newBmi
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Server Error',
        })
    }
})

//@get all bmi
router.get('/api/v1/user/bmi', async(req, res) => {
    // Get all bmi units in the data variable using the .find method
    try {
        const data = await Bmi.find();
        return res.status(201).json({
            message: 'success all bmi Units gotten from db',
            data
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Server Error',
        })
    }
})


//@fetch single bmi unit
router.get('/api/v1/user/bmi/:bmiId', async(req, res) => {
    //find bmi units with a given id
    try {
        const { bmiId } = req.params;
        res.json(await Bmi.findById({
            _id: bmiId
        }))
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Server Error',
        })
    }
})

//@update request /UPDATE
router.put('/api/v1/user/bmi/:bmiId', async(req, res) => {
    try {
        const updatedBmi = await Bmi.updateOne({ _id: req.params.bmiId }, {
            $set: {
                name: req.body.name,
                weight: req.body.weight,
                height: req.body.height
            }
        })
        return res.status(201).json({
            message: 'success all bmi Units updated successfully from db',
            updatedBmi,
            name: req.body.name,
            weight: req.body.weight,
            height: req.body.height
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Server Error',
        })
    }
})


//Update a specific post
router.patch('/:postId', async(req, res) => {
    try {
        const updatedPost = await Post.updateOne({ _id: req.params.postId }, { $set: { title: req.body.title } })
        res.json({ updatedPost })
    } catch (err) {
        res.json({ message: err })
    }
})





// @Update bmi by ID
router.put("'/api/v1/user/bmi/:bmiId", async (req, res) => {
  const { name, weight, height } = req.body;
  const { bmiId } = req.params;
  res.json(await Bmi.updateOne({ _id: bmiId }, { name,weight, height }));
});

//@delete request /DELETE
router.delete('/api/v1/user/bmi/:bmiId', async(req, res) => {
    try {
        const { bmiId } = req.params;
        await Bmi.deleteOne({
            _id: bmiId
        })
        res.status(200).send({
            message: ' successfully deleted from db',
            bmiId
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: 'Server Error',
        })
    }
})
module.exports = router;
