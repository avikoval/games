import dotenv from "dotenv";
import express from 'express'
import cors from 'cors'
// import morgan from 'morgan'
// import bodyParser from 'body-parser'
import authRoutes from './routes/auth.js'

dotenv.config()
const app = express()
app.use(express.json())
app.use(cors())
// app.use(morgan('dev'))
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser.json());

app.use('/', authRoutes)

export default app