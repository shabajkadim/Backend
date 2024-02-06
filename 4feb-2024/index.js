import express from 'express';
import AllRoutes from './Routes/index.js'
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors'

const app = express();
app.use(express.json())
app.use(cors())
dotenv.config();


app.get('/',(req,res)=>{
    return res.send("home page")
})

app.use('/api/v1',AllRoutes)

mongoose.connect(process.env.DATABSE_CONNECT).then(()=>{
    console.log("DAtabase connected")
})
app.listen(8000,(()=>{
    console.log("port running on 8000")
}))