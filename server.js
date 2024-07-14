import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

// import api routes
import authRouter from "./routes/auth.routes.js";

// user routes
app.use("/api/auth", authRouter);

export default app;
