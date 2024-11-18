import 'dotenv/config'; // This will load variables from .env into process.env
console.log('Environment variables:', process.env); // Check if variables are loaded


import dbConnect from './dbconnect.mjs';

const runTest = async () => {
  console.log('MONGODB_URI:', process.env.MONGODB_URI); // Check if the variable is loaded
  try {
    await dbConnect();
    console.log('Database connection successful');
  } catch (error) {
    console.error('Database connection failed:', error);
  } finally {
    process.exit(0); // Exit the process after the test
  }
};

runTest();
