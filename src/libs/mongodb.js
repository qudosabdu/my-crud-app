// Require dotenv and load the environment variables from .env.local file
require('dotenv').config({ path: '../../.env.local' });

// Now you can access the environment variables
console.log("Before loading .env.local file");
console.log("After loading .env.local file");
console.log("MONGODB_URI:", process.env.MONGODB_URI);

// Here you can continue with your MongoDB connection logic
// For example, using mongoose to connect to MongoDB
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch(error => console.error("Error connecting to MongoDB:", error));


// export default dbConnect;


// const connectMongoDB = async () => {

//     try {
//         await mongoose.connect(process.env.MONGODB_URI)
//         console.log("MongoDB connected")

//     } catch (error) {
//         console.log(error)
//     }
// }
// connectMongoDB()

// module.exports = connectMongoDB;


