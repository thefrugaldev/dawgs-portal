// lib/db.js
import mongoose from 'mongoose';

let cachedDb: any = null;

async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb;
  }

  const DB_URI = process.env.DB_URI;

  if (!DB_URI) {
    throw new Error(
      'Please define the DB_URI environment variable inside .env.local',
    );
  }

  const connection = await mongoose.connect(DB_URI);

  cachedDb = connection;
  return connection;
}

export default connectToDatabase;
