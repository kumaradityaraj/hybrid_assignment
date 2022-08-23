//Here we have imported the app module
const app = require("./app");

const dotenv = require("dotenv");

dotenv.config({path:"config/config.env"})

// We are telling the server to listen on our particular port
app.listen(process.env.PORT, () => {
  console.log(`Server is working on http://localhost:${process.env.PORT}`);
});

