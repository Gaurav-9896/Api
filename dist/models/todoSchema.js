"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const todoSchema = new mongoose_1.default.Schema({
    Title: {
        type: String,
        Required: true
    },
    complete: {
        type: Boolean,
        default: false
    },
    CreatedBy: {
        type: mongoose_1.default.Schema.Types.ObjectId, //type for using references
        ref: "User" //will take ref from user
    },
    SubTodos: [{
            type: mongoose_1.default.Schema.Types.ObjectId,
            ref: "SubTodo"
        }]
}, { timestamps: true });
exports.Todo = mongoose_1.default.model('Todo', todoSchema);
