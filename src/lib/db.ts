// lib/db.js
import mongoose from 'mongoose';

let cachedDb: any = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const MONGODB_URI = process.env.DB_URI;

  if (!MONGODB_URI) {
    throw new Error(
      'Please define the MONGODB_URI environment variable inside .env.local',
    );
  }

  const connection = await mongoose.connect(MONGODB_URI);

  cachedDb = connection;
  return connection;
}

export default connectToDatabase;
