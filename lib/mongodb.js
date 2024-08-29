// lib/mongodb.js
import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI; // Add your MongoDB connection string to .env.local
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let clientPromise;

if (process.env.NODE_ENV === 'development') {

  if (!global._mongoClientPromise) {
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new connection for each request.
  clientPromise = client.connect();
}
export default clientPromise;
