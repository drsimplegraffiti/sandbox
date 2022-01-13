const { createClient } = require('redis');

(async() => {
    const client = createClient();

    // client.on('error', (err) => console.log('Redis Client Error', err));
    client.on('connect', (err) => console.log('connected'));

    await client.connect();

    await client.set('name', 'joe');
    const value = await client.get('key');
})();