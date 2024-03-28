"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); //used for cross origin resources like vercel
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)()); //add url in it
app.use(express_1.default.json({ limit: "25kb" })); //express.json is used to take JSON as input and apply a limit of 25kb
app.use(express_1.default.urlencoded()); //when getting data from url 
app.use(express_1.default.static("public")); //when we have to save some data temp on server like images 
app.use((0, cookie_parser_1.default)()); //to perform operation on users browser cookies
