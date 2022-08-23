//Here we have imported the required module
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database");

// Handling Uncaught Exception
process.on("uncaughtException",()=>{
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception`);
  process.exit(1);
})

// Congig
dotenv.config({ path: "config/config.env" });

// Connecting to database
connectDatabase();

// We are telling the server to listen on our particular port
const server = app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled promise rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to unhandled Promise Rejection`);
  server.close(()=>{
    process.exit(1)
  });
});
