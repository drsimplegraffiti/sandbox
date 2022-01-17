const express = require('express');
const redis = require('redis');
const axios = require('axios');
const morgan = require('morgan');
const app = express();



const redisPort = 6379;
const client = redis.createClient(redisPort);


client.on("error", (err) => {
    console.log(err);
})


//Route
app.get('/jobs', (req, res) => {
    const searchTerm = req.query.search;
    try {
        client.get(searchTerm, async(err, jobs) => {
            if (err) throw err;
            if (jobs) {
                res.status(200).send({
                    jobs: JSON.parse(jobs),
                    message: "data received from the cache"
                })
            } else {
                const jobs = await axios.get(`https://jobs.github.com/positions.json?search=${searchTerm}`);
                client.setex(searchTerm, 600, JSON.stringify(jobs.data))
                res.status(200).send({
                    jobs: jobs.data,
                    message: "cache miss"
                });
            }
        })
    } catch (err) {
        res.status(500).send({
            message: err.message
        })
    }
});

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})