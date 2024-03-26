"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    name: { type: String, Required: true },
    Age: { type: Number, Required: true },
    gender: { type: String, Required: true }
});
const User = mongoose_1.default.model("User", schema);
exports.default = User;
