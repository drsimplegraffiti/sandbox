const express = require('express');
const redis = require('redis');
const axios = require('axios');
const morgan = require('morgan');

const PORT = process.env.PORT || 5000;
const REDIS_PORT = process.env.PORT || 6379;

//create redis client
const client = redis.createClient();

const app = express();


//Set response
function setResponse(username, repos) {
    return `<h2>${username} has ${repos} Github public repos</h2>`
}


app.use(morgan('dev'));

//get repos function from an api e.g gitHub API
async function getRepos(req, res, next) {
    try {
        console.log('Fetching data.........');
        const { username } = req.params;
        const response = await axios(`https://api.github.com/users/${username}`);
        console.log(response.data);
        // return res.status(200).json(response.data.public_repos);
        const repos = response.data.public_repos;

        //set to redis
        await client.setex(username, 3600, repos); //setex: set expiration, KEY: username, EXPIRATION: 3600(1hr), DATA: repos
        res.send(setResponse(username, repos));
        return true;

    } catch (err) {
        console.error(err);
        res.status(500)
    }
}


// Cache middleware
function cache(req, res, next) {
    const { username } = req.params;
    client.get(username, (err, data) => {
        if (err) throw err;
        if (data !== null) {
            res.send(setResponse(username, data))
        } else {
            next()
        }
    })
}

//Route
app.get('/repos/:username', cache, getRepos);

app.listen(PORT, () => {
    console.log(`server running on port: ${PORT}`);
})