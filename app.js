const connectDB = require('./db/connect');
require('dotenv').config();
const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const not_found = require('./middleware/not-found');
const errorhandler = require('./middleware/error-handler');

const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.static('./public'));

// routes 
app.use('/api/v1/tasks', tasks);

//Error-Handling Middleware
app.use(errorhandler);

// Handling the Resource Not found 
app.all('/*', not_found);

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        console.log('Connected to the DB...');
        app.listen(port, () => {
            console.log(`Server listening on port ${port}...`)
        });
    } catch (error) {
        console.log(error);
    }
}

start();


/*
    app.get('/api/v1/tasks')          -- get all the tasks
    app.post('/api/v1/tasks')         -- create a new task
    app.get('/api/v1/tasks/:id')      -- get single task
    app.patch('/api/v1/tasks/:id')    -- update a task
    app.delete('/api/v1/tasks/:id')   -- delete a task
*/