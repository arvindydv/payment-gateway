import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from "./swagger.json" assert { type: "json" };

const app = express();
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// import api routes
import authRouter from "./routes/auth.routes.js";
import paymentRouter from "./routes/payment.routes.js";
import refundRouter from "./routes/refund.routes.js";
// user routes
app.use("/api/auth", authRouter);
app.use("/api/payment", paymentRouter);
app.use("/api/refund", refundRouter);

export default app;
