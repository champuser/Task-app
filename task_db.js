const mongoose = require('mongoose');

const Connection = mongoose.createConnection(process.env.task_db,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
});
    module.exports = Connection;