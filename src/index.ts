import app from './app';
import dotenv from 'dotenv';
import { connectDB } from './config/db';  // your mongoose connection function

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();  // wait for DB connection first
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Failed to connect to database', error);
    process.exit(1);  // stop the app if DB connection fails
  }
};

startServer();


