const express=require('express')
const dotenv=require('dotenv')
const connect=require('./config/db')
const taskRoutes=require('./routes/taskRoutes') //calling alll routes
const cors=require('cors')
dotenv.config()
connect();
const app=express();
app.use(cors());
app.use(express.json())
app.use('/api/tasks',taskRoutes)
const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{
    console.log('server started')
})