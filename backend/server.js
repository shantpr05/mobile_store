// Handle uncaught exceptions (sync errors not caught anywhere)
process.on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION! Shutting down...');
    console.log(`Error: ${err.message}`);
    process.exit(1);
});
const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./config/database');

dotenv.config({ path: path.join(__dirname, 'config/config.env') });

connectDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});

// Handle unhandled promise rejections (like DB down or URI error)
process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! Shutting down...');
  console.log(`Error: ${err.message}`);

  // Gracefully shut down the server
  server.close(() => {
    process.exit(1);
  });
});
