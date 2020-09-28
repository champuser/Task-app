const mongoose = require('mongoose')

const taskConnection = require('../config/task_db');

const TaskSchema =  {
    description: {
        type: String,
        required: true,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}

module.exports = taskConnection.model('Task',TaskSchema);