import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    Title: {
        type: String,
        Required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    CreatedBy: {
        type: mongoose.Schema.Types.ObjectId, //type for using references
        ref: "User"  //will take ref from user
    },
    SubTodos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo"
    }]
}, { timestamps: true })

export const Todo = mongoose.model('Todo', todoSchema)