require("dotenv").config();

const { appConfig } = require("./config/app.config");

const express = require("express");
const cors = require("cors");

const chatRoutes = require("./routes/chatRoutes");

const app = express();

const ALLOWED_CORS = appConfig.allowed_cors;
const PORT = appConfig.port;

app.use(
  cors({
    origin: ALLOWED_CORS,
    credentials: true,
  }),
);

app.use(express.json());

app.use(chatRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Backend running on http://localhost:${PORT}`);
});
