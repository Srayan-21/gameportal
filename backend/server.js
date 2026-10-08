const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// ==========================================
// MIDDLEWARE
// ==========================================

app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

app.use(express.json());

// ==========================================
// DATABASE CONNECTION
// ==========================================

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((error) => {
    console.error(
      "MongoDB connection failed:",
      error.message
    );
  });

// ==========================================
// ROUTES
// ==========================================

// Authentication
const authRoutes = require("./routes/auth");

app.use(
  "/api/auth",
  authRoutes
);


// Tournament system
const tournamentRoutes = require("./routes/tournments");

app.use(
  "/api/tournaments",
  tournamentRoutes
);

// ==========================================
// TEST ROUTE
// ==========================================

app.get("/", (req, res) => {
  res.json({
    message: "ArenaX API is running",
  });
});

// ==========================================
// SERVER
// ==========================================

app.listen(PORT, () => {
  console.log(
    `Server running on http://localhost:${PORT}`
  );
});