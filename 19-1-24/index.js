import  express from 'express';
import { Home } from './Controllers/home.controller.js';
import AllRoutes from './Routes/index.js'

const app=express();

app.get('/',Home)

app.use('/api/v1',AllRoutes)



app.listen(8000,()=>{console.log("Running port in 8000")})