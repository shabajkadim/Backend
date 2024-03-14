import express from 'express'
import { Register } from './Controller/AuthController.js'



const app=express()

app.get("/",((req,res)=>{
    res.send("welcome")
}))

app.get("/register",(Register))



app.listen(8080,(()=>{console.log("port runnig on 8080")}))