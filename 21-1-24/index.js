import express from 'express'
import AllRoutes from './Router/index.js'
import dotenv from 'dotenv'
import mongoose from 'mongoose';


const app = express();
app.use(express.json())
dotenv.config();

app.get('/',(req,res)=>{
    res.send("welcome...")
})

app.use('/api/v1',AllRoutes)

mongoose.connect(process.env.DATABASE_URL).then(()=>{
    console.log("Database connected")
})
app.listen(8000,()=>{console.log("Runnning port in 8000")})