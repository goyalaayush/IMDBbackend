require("dotenv").config();
const express=require('express')
const cors=require('cors')
const dbconnect=require('./dbconnect')
const app=express();
const movieroutes=require('./Routes/movies');

dbconnect()
app.use(express.json())
app.use(cors());
app.use('/api',movieroutes);


const port=process.env.PORT||8080;

app.listen(port,()=>{

    console.log('Server listening')
})
