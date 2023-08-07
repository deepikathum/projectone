import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import router from './routes/UserRoute.js';

dotenv.config();
const app = express();
app.use(express.json() );
app.use(express.urlencoded({ extended: true }));
app.use(cors())


mongoose.connect(process.env.MONGO_URI , { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=>console.log('mongodb connected')) 
.catch((err)=>console.log(err))

app.use("/api/users",router)

const PORT = process.env.PORT || 5000; 

app.listen(PORT,()=>{
    console.log(`server runinng on port ${PORT}`)
});