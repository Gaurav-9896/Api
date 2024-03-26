import mongoose from "mongoose";

const schema = new mongoose.Schema({
    name:{type : String ,Required :true},
    Age :{type : Number ,Required : true},
    gender:{type : String ,Required :true}
})

const User = mongoose.model("User",schema);

export default User;