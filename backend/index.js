require("dotenv").config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const challengeRoutes = require("./routes/challengeRoutes");
const completerRoutes = require("./routes/completerRoutes");
const founderRoutes = require("./routes/founderRoutes");
const subscriberRoutes = require("./routes/subscriberRoutes");

const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(express.json());
const corsOptions = {
  origin: ["http://localhost:3000", process.env.FRONTEND_URI], // Allowed domains
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allowed headers
  credentials: true, // Allow cookies and authentication headers
};

app.use(cors(corsOptions));
app.use(morgan("dev"));

// Routes
app.use("/api/challenges", challengeRoutes);
app.use("/api/completers", completerRoutes);
app.use("/api/founders", founderRoutes);
app.use("/api/subscribers", subscriberRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
