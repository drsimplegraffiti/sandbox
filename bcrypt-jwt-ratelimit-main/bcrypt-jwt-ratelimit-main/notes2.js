const express = require('express');
const router = express.Router();
const User = require('../models/User');
const Joi = require('@hapi/joi');

//Validation
const schema = Joi.object({
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required(),
})

router.post('/register', async (req, res) => {
  //Validating the data with Joi
  const validation = schema.validate(req.body);
  if (validation.error) return res.status(400).json({ message: validation.error.details[0].message });
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })
  try {
    const savedUser = await user.save();
    return res.status(200).json({
      data: savedUser
    })
  } catch (error) {
    return res.status(400).json({
      message: "something went wrong"
    })
  }
});


router.post('/login', (req, res) => {
  res.send('working');
});
module.exports = router;