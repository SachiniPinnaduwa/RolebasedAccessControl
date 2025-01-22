const express = require("express");
const dotenv = require("dotenv").config();

const app = express();

//Middleware
app.use(express.json());

//Routes

//Start the server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
