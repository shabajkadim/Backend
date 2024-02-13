import express, { json } from 'express'
import AllRoutes from './Routes/index.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors';

const app=express()
app.use(express.json())
app.use(cors())
dotenv.config()

app.get('/',(req,res)=>{
    return res.send("home page")
})

app.use('/api/v1',AllRoutes)

// app.use('/api/v1',AllRoutes)

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("DAtabse Connected...")
})
app.listen(8000,()=>{console.log("port runing in 8000")})