const express=require('express')
const userRouter=require('./routes/rUser.js');
const mongoDB=require('./connectionMongoDB.js');
const logfile=require('./middlewares/');
const app=express();
const port=8000;

app.listen(port,()=>console.log('server started successfully at port:',port));


// get and connect mongo>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

mongoDB.DBCon('mongodb://127.0.0.1:27017/studentsDB')
.then(()=>{
    console.log('mongoDB connected');
});

//  add middlewares >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.use(express.urlencoded({extended:false}));


app.use('/api/users',userRouter);


// app.use(logfile('./logs.txt'));
