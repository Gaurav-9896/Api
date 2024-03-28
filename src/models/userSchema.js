"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.default.Schema({
    username: { type: String, Required: true, unique: true, lowercase: true },
    password: { type: String, Required: [true, 'password is required'] },
    email: { type: String, Required: true, unique: true, lowercase: true }
}, {
    timestamps: true
});
exports.User = mongoose_1.default.model("User", schema);
