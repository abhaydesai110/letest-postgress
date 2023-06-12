const express = require("express");
const app = express();
const cors = require("cors");

// Import the router file
app.use(express.json());
// Apply the router middleware
app.use(cors());

const router = require("./Routes/routerFile");
app.use("/api", router);
// Other middleware and routes can be added here

// Start the server
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
