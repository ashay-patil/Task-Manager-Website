const Task = require('../models/Task');
const asyncWrapper = require('../middleware/async');
const {createCustomError} = require('../errors/custom-error');

const getAllTasks = asyncWrapper(async (req, res) => {  // in asyncWrapper we pass this code snippet where error can happen and in asyncWrapper() handle this code in try catch....
    const tasks = await Task.find();   //task.find() returns an array having all the json documents and that array is names as tasks
    res.status(200).json({ tasks });   // sending the tasks array inside a json object   { tasks : [{},{},{},..]}
});

const createTask = asyncWrapper(async (req, res) => {
    const task = await Task.create(req.body);   // saves the new document in database and returns the new document
    res.status(201).json({ task });  // task is a json and {task} is a nested json object     { task: {...} }
});

const getTask = asyncWrapper(async (req, res,next) => {
    // if the id is not matching then we manually have to handle the !task condition but if there is any syntax error in id then the mongoDB will throw error which we are handling through try... catch...
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });
    if (!task) {
        const err = createCustomError(`No task with ID ${taskID}`,404);
        return next(err);   // This error is not thrown by the mongoose.... We have created this custom error and it will execute in the try block of asyncWrapper...
    }
    res.status(200).json({ task });
});

const updateTask = asyncWrapper(async (req, res,next) => {
    const { id: taskID } = req.params;
    const task = await Task.findByIdAndUpdate({ _id: taskID }, req.body, { new: true, runValidators: true });
    if (!task) {
        const err = createCustomError(`No task with ID ${taskID}`,404);
        return next(err);
    }
    res.status(200).json({ task });
});

const deleteTask = asyncWrapper(async (req, res,next) => {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
        const err = createCustomError(`No task with ID ${taskID}`,404);
        return next(err);
    }
    res.status(200).json({ task });
});

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
};