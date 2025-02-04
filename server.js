const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/auth");

connectDB();

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", authRoutes);

const PORT = 4000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
