import mongoose from "mongoose";

const schema = new mongoose.Schema({
    username:{type : String ,Required :true,unique:true,lowercase:true},
    password:{type :String,Required:[true ,'password is required']},
    email:{type : String ,Required :true,unique:true,lowercase:true}

},
{
    timestamps:true
}

)
 export const User = mongoose.model("User",schema);

 

