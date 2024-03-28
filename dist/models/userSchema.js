"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    username: { type: String, Required: true, unique: true, lowercase: true },
    password: { type: String, Required: [true, 'password is required'] },
    email: { type: String, Required: true, unique: true, lowercase: true }
}, {
    timestamps: true
});
exports.User = mongoose_1.default.model("User", schema);
