const express = require('express');
const router = express.Router();
const verify = require('./verifyToken');


router.get('/article', verify, (req, res) => {
  console.log(req.user)
  return res.status(200).json({
    message: "this endpoint is protected"
  });
});

module.exports = router;