import dotenv from 'dotenv';
import express,{Request,Response} from 'express'
import {User} from './models/userSchema';
import {connectDB} from './db';
dotenv.config();
const app = express();
app.use(express.json());


app.get('/',(req:Request,res:Response)=>{
 res.send("hello from server")
});

app.post('/User',async(req:Request,res:Response)=>{
    try {
        await User.create(req.body)
    } catch (err:any)
    {
        res.status(500).json({message:err})
        console.log("This is a post method");
    }
})
// app.listen(5000, ()=>{
//     console.log("server stated on https://localhost:5000/")
// });

connectDB().then(()=>
    app.listen(5000, ()=>{
        console.log("server stated on https://localhost:5000/")
    })
).catch((error) =>{
    console.log("Mongodb connection failed",error)
})
