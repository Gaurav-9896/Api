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
const express_1 = __importDefault(require("express"));
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema_1 = __importDefault(require("./models/userSchema"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send("hello from server");
});
app.post('/User', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield userSchema_1.default.create(req.body);
    }
    catch (err) {
        res.status(500).json({ message: err });
    }
}));
app.listen(5000, () => {
    console.log("https://localhost:3000/");
});
mongoose_1.default.connect("mongodb+srv://panchalgaurav487:773eud3qXVSSX7WI@mydatabase.tfuzwdo.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=myDatabase")
    .then(() => {
    console.log("connected to database");
})
    .catch(() => {
    console.log("connection failed");
});
