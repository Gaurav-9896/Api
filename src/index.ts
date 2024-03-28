import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import {User} from './models/userSchema';
dotenv.config();
const app = express();
app.use(express.json());

const mongouri = process.env.MongoDB || "mongodb://localhost"
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
app.listen(5000, ()=>{
    console.log("https://localhost:3000/")
});

mongoose.connect(mongouri)
.then(()=>{
    console.log("connected to database");
})
.catch(() =>{
    console.log("connection failed")
});