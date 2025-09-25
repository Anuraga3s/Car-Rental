import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import userRouter from './routes/userRoutes.js';
import ownerRouter from './routes/ownerRoutes.js';
import bookingRouter from './routes/bookingRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
  origin: "https://car-rental-five-fawn.vercel.app",  // your frontend domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));


// connect to db
 connectDB()

app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/api/user',userRouter);
app.use('/api/owner',ownerRouter);
app.use('/api/bookings',bookingRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});