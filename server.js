//Here we have imported the required module
const app = require("./app");
const dotenv = require("dotenv");
const connectDatabase = require("./config/database")

// Congig
dotenv.config({ path: "config/config.env" });

// Connecting to database
connectDatabase()

// We are telling the server to listen on our particular port
app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});
