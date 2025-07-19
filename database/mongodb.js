import mongoose from "mongoose";

import { DB_URI, NODE_ENV } from "../config/env.js";

if (!DB_URI) {
  throw new Error("Please define DB_URI env variable in .env.<development/production>.local");
}

async function connectToDatabase() {
  try {
    await mongoose.connect(DB_URI);

    console.log(`Connected to database in ${NODE_ENV} mode`);
  } catch (error) {
    console.error(`🚨 Error connecting to database: ${error}`);
    process.exit(1);
  }
}

export default connectToDatabase;
