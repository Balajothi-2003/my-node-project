// seeds/seedAdmin.js
require('dotenv').config();

console.log('MONGO_URI from env:', process.env.MONGO_URI);          
console.log('All env vars:', process.env);                         

const mongoose = require('mongoose');
const User = require('../models/user');   

const seedAdmin = async () => {
  try {
    console.log('Trying to connect to MongoDB...');
    await mongoose.connect(process.env.MONGO_URI);

    console.log('Connected successfully!');

    const adminExists = await User.findOne({ email: 'admin@example.com' });

    if (adminExists) {
      console.log('Admin already exists'.yellow);
      process.exit(0);
    }

    await User.create({
      name: 'Admin User',
      email: 'admin@example.com',
      password: 'admin123456',
      role: 'admin',
    });

    console.log('Admin user created successfully'.green);
  } catch (error) {
    console.error('Detailed error during seeding:');
    console.error(error);                           
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
  } finally {
    mongoose.connection.close().catch(() => {});
  }
};

seedAdmin();