require('dotenv').config();

const app = require('./app');
const dotenv = require("dotenv");
dotenv.config();
const connectDB = require('./src/config/db');

const PORT = process.env.PORT || 3000;

connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

console.log("MONGO URI =", process.env.MONGO_URI);

});
