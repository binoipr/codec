const express = require("express");
const cors = require("cors");
const path = require("path");

require("dotenv").config({ path: "./config/config.env" });

const connectDB = require("./config/db");
const authRoutes = require("./routes/auth.js");
const resultRoute = require("./routes/slotMachineRoute");

const app = express();

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/auth", authRoutes);
app.use("/slotmachine", resultRoute);

if (process.env.NODE_ENV === "production") {
  /*-----Set static folder----*/
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
