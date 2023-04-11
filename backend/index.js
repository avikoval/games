import express from 'express';
import cors from 'cors';
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';
import router from './routes/index.js';
import mongoose from 'mongoose';
import errorMiddleware from './middleware/error-middleware.js';


dotenv.config();
const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.BD_URL)
.then(() => console.log(`db was connected... success`))
.catch((error) => console.warn(`db ${error}... error`))

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())
app.use('/api', router)
app.use(errorMiddleware)


app.listen(PORT, (err) => {
	if(err) {
		console.log(err);
	} 
	console.log(`server http://localhost:${PORT}... success`)
})
