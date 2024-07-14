import { Router } from "express";
import { refundPayment } from "../controllers/refund.controller.js";

import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/refund/:id").post(verifyJwt, refundPayment);

export default router;
