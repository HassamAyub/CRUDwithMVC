const express=require('express')
const DBConnection=require('./connectionMongoDB.js');
const userRouter=require('./routes/rUser.js');
const logReq=require('./middlewares/');

const app=express();
const port=8000;
app.listen(port,()=>console.log('server started successfully at port:',port));


// get and connect mongo>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
DBConnection('mongodb://127.0.0.1:27017/studentsDB')
.then(()=>{
    console.log('mongoDB connected');
});

//  add middlewares >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.use(express.urlencoded({extended:false}));

// routes req and res >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
app.use(logReq('./logs.txt'));
app.use('/api/users',userRouter);


