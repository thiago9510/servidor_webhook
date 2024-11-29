import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
import { router } from './routers/router'




dotenv.config()
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cors())
app.use(router)


if(process.env.SERVER_PORT){
    const serverPort = parseInt(process.env.SERVER_PORT)
    app.listen(serverPort, '0.0.0.0', async ()=> {
        console.log(`server running on port ${serverPort}`)        
    })
}else {
    console.error(`SERVER_PORT not defined`)
}