## Unit Testing
> i.e Testing a simple, single test and smallest unit of your code

* To install <kbd>npm i jest --save-dev</kbd>

```javascript
{
    "name": "test-node",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
        "test": "jest --coverage --watchAll"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "devDependencies": {
        "jest": "^27.4.7"
    }
}
```

---

## Test structure
```javascript

const express = require('express');
const app = express();
app.get('/', (req, res, next) => {
    // .....do something
});

module.exports = app;
```

---

> Run: npm test
 
### Coverage
The coverage flag <kbd>--coverage</kbd> create the coverage folder.

* To see the graphical representation
![jest 2](https://user-images.githubusercontent.com/70065792/148645226-83e3941d-f153-4d7a-8534-cefe2e101301.PNG)

* Open the coverage folder and use live server to open it.
![jest 1](https://user-images.githubusercontent.com/70065792/148645223-266c30fa-1625-42e2-825d-7051a4c05a0c.PNG)

* To see where the code breaks click on the specific link
![jest 3](https://user-images.githubusercontent.com/70065792/148645342-bb834804-5ab7-4a91-9c72-029670a50aa2.PNG)

* Result
![jest 4](https://user-images.githubusercontent.com/70065792/148645212-fde78331-0c27-4ad4-9762-cb2803e35a58.PNG)



 ---
## Integration Test: Tesing Http Server
* Install the packages
<kbd> npm install supertest jest -D </kbd>
![jest 3](https://user-images.githubusercontent.com/70065792/148649997-7146dac0-8abe-43a1-9e75-4a6b71e2c499.PNG)

* Run the test
<kbd> npm test</kbd>

```Javascript
// Test Driven Development (Integration Test)

const request = require('supertest');
const app = require('./app');

describe('Todos API', () => {
    it('GET /todos --> array todos', () => {
        return request(app).get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            completed: expect.any(Boolean),
                        })
                    ])
                )
            })
    });
```
    
    
If test passes
    
![supertest 2](https://user-images.githubusercontent.com/70065792/148649845-0021b5db-0a55-4fb0-903a-e47dc0a9d33f.PNG)

If test fails
![supertest](https://user-images.githubusercontent.com/70065792/148649860-b9678fc9-2b93-43ba-9f74-43bc93fdd148.PNG)

## Reading and Debugging errors
![supertest 4](https://user-images.githubusercontent.com/70065792/148650196-d65375f4-60c9-424d-8535-7329c94ff966.PNG)

