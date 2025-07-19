import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import authRoutes from './routes/authRoutes.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import filterRoutes from './routes/filterRoutes.js'
import { errorHandler } from './middleware/errorHandler.js'
import locationRoutes from './routes/locationRoutes.js'

dotenv.config()

// Connect to MongoDB but don't block server startup
connectDB().catch(err => {
  console.error(`MongoDB connection error: ${err.message}`);
  console.log('Server will continue to run with limited functionality');
});

const app = express()
app.use(cors())
app.use(express.json())

// Basic health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

app.use('/api/auth', authRoutes)
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/filters', filterRoutes)
app.use('/api/locations', locationRoutes)

app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error(`Uncaught Exception: ${err.message}`);
  console.error(err.stack);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});