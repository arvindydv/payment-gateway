import { Router } from "express";
import {
  createPayment,
  getAllPayments,
  getPaymentStatus,
  processPayment,
} from "../controllers/payment.controller.js";
import { verifyJwt } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/payment").post(verifyJwt, createPayment);
router.route("/process/:id").patch(verifyJwt, processPayment);
router.route("/payment/:id").get(verifyJwt, getPaymentStatus);
router.route("/payment").get(verifyJwt, getAllPayments);

export default router;
