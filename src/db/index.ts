import mongoose from "mongoose";


export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MongoDB}`)
        console.log("\n Mongodb is connected" )
    } catch (error) {
        console.log("Mongo connection failed",error)
    }

}
 


