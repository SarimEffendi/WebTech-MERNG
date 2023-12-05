const TaskModel = require('../models/TaskModel');

const getTasks = async (req, res) => {
    const tasks = await TaskModel.find();
    res.send(tasks)
    // res.send("hello world")
};


const createTask = async (req, res) => {
    const task = new TaskModel(req.body);
    await task.save();
    res.send(task)
} 




module.exports = getTasks; 