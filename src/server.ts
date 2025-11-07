import express, { type Request, type Response } from 'express'
import cors from 'cors'
import { routes } from './router'
import "dotenv/config";

const app = express()
app.use(express.json())
app.use(cors())
app.use(routes)




app.listen(3333, () =>{
    console.log("servidor online")
})