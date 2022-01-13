const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const { sendMail } = require('./Utils/emailSender');
const { eMessage } = require('./Utils/emailTemplate');
dotenv.config();

const app = express();
const PORT = process.env.PORT || 9000;

// Middleware body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/', express.static(__dirname + '/views'));


// Create a server
app.listen(PORT, () => {
    console.log(`app is listening on ${PORT}`);
})

// POST login request
app.post('/', async(req, res) => {
    const { name, email, subject, message } = req.body;
    try {
        if (!name && !email && !subject && !message)
            return res.json({ message: "incomplete data, please fill appropriately" })
        await sendMail({
            name,
            email,
            subject,
            message: await eMessage(name, email, subject, message)
        })
        res.status(201).json({ message: 'Email sent' });

    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Email not sent' })
    }

})