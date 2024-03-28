import express from 'express'
import cors from 'cors' //used for cross origin resources like vercel
import cookieParser from 'cookie-parser'


const app = express();
app.use(cors()) //add url in it
app.use(express.json({limit:"25kb"}))//express.json is used to take JSON as input and apply a limit of 25kb
app.use(express.urlencoded())//when getting data from url 
app.use(express.static("public")) //when we have to save some data temp on server like images 
app.use(cookieParser())//to perform operation on users browser cookies
