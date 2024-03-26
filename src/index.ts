import express, { Request, Response } from 'express';
import  BodyParser  from 'body-parser';
import mongoose from 'mongoose';
import User from './models/userSchema';
const app = express();
app.use(express.json);

app.get('/',(req:Request,res:Response)=>{
 res.send("hello from server")
});

app.post('/User',async(req:Request,res:Response)=>{
    try {
        await User.create(req.body)
    } catch (err:any)
    {
        res.status(500).json({message:err})
    }
})
app.listen(3000, ()=>{
    console.log("running on port 3000")
});

mongoose.connect("mongodb+srv://panchalgaurav487:773eud3qXVSSX7WI@mydatabase.tfuzwdo.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=myDatabase")
.then(()=>{
    console.log("connected to database");
})
.catch(() =>{
    console.log("connection failed")
});