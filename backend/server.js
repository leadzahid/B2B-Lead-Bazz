const cors = require("cors");
const dotenv = require("dotenv");
const express = require("express");
const nodemailer = require("nodemailer");

// server.js

const orderRoute = require("./routes/order.route.js");
const contactRoute = require("./routes/contact.route.js");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use("/api", orderRoute);
app.use("/api", contactRoute);

app.get("/", (req, res) => {
  res.send("Lead Bazz Backend is Running 🚀");
});

app.listen(PORT, () => {
  console.log(`Server running on port http://localhost:${PORT}`);
});
module.exports = app;
