import express, { json } from 'express';
import { Home } from './Contoller/home.controller.js';
import AllRoutes from './Routes/index.js'

const app=express();
app.use(express.json())
app.get('/',Home)

app.use('/api/v1',AllRoutes)


app.listen(8000,()=>{console.log('Running port 8000 successful')})