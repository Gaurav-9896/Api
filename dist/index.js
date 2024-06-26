"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const userSchema_1 = require("./models/userSchema");
const db_1 = require("./db");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("hello from server");
});
app.post('/User', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userSchema_1.User.create(req.body);
    }
    catch (err) {
        res.status(500).json({ message: err });
        console.log("This is a post method");
    }
}));
app.listen(5000, () => {
    console.log("server stated on https://localhost:5000/");
});
(0, db_1.connectDB)().then(app.listen(process.env.Port || 5000, () => {
    console.log("server stated on https://localhost:5000/");
})).catch((error) => {
    console.log("Mongodb connection failed", error);
});
