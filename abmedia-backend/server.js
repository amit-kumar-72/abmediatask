// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import destinationRoutes from './routes/destinationRoutes.js';
import packageRoutes from './routes/packageRoutes.js';

import path from 'path';

dotenv.config();
const app = express();
connectDB();

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true, //  if  using cookies or auth headers for that purpose but here we do not use cookie
}));
app.use(express.json());


app.use('/uploads', express.static(path.resolve('uploads'))); // to serve images


app.use('/api/destinations', destinationRoutes);
app.use('/api/packages', packageRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(` Server running on http://localhost:${PORT}`);
});
