const mongoose = require('mongoose');
const userConn = mongoose.createConnection(process.env.user_db,{

    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(()=>{
console.log("DB CONNECTED");
});




module.exports = userConn;