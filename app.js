const express = require('express')
 
const app = express()

const mongoose = require('mongoose');
 bodyParser = require('body-parser');
    require('dotenv').config({});            

  app.use(bodyParser.json());    



const UsersRoute = require('./routes/User');

app.use('/User',UsersRoute); 


const TasksRoute = require('./routes/Task');

app.use('/Task',TasksRoute); 






// mongoose.connect(process.env.Local_Connection,{useNewUrlParser: true,useUnifiedTopology: true},()=>{
//     console.log('DB Connected');
// });
app.listen(8080,(error,result)=>{

    if(error){
        console.log(error);
        process.exit(1);
    }
    console.log('Server Connected');

});


