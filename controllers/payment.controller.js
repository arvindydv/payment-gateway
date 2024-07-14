import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Payment } from "../models/payment.model.js";
import generateUniqueId from "generate-unique-id";

const createPayment = asyncHandler(async (req, res) => {
  const payload = req.body;

  if (!payload.amount || !payload.currency || !payload.paymentMethod) {
    return res
      .status(400)
      .json(
        new ApiResponse(
          400,
          {},
          "Amount, Currency and PaymentMethod are required"
        )
      );
  }

  if (payload.amount < 0) {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Please enter vaild amount"));
  }
  payload.userId = req.user._id;
  const payment = await Payment.create(payload);

  return res.status(201).json(new ApiResponse(201, payment, ""));
});

const processPayment = asyncHandler(async (req, res) => {
  const paymentId = req.params.id;
  const payment = await Payment.findOne({
    _id: paymentId,
    userId: req.user._id,
  });

  if (!payment) {
    return res.status(404).json(new ApiResponse(404, {}, "Payment not found"));
  }

  payment.status = "completed";
  payment.transactionId = generateUniqueId();

  await payment.save();
  return res
    .status(200)
    .json(new ApiResponse(200, payment, "Transaction completed successfully"));
});

const getPaymentStatus = asyncHandler(async (req, res) => {
  const paymentId = req.params.id;
  const payment = await Payment.findOne({
    _id: paymentId,
    userId: req.user._id,
  });

  if (!payment) {
    return res.status(404).json(new ApiResponse(404, {}, "Payment not found"));
  }

  return res
    .status(200)
    .json(new ApiResponse(200, payment, "Payment get successfully"));
});

const getAllPayments = asyncHandler(async (req, res) => {
  const payment = await Payment.find({
    userId: req.user._id,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, payment, "All payments get successfully"));
});

export { createPayment, processPayment, getPaymentStatus, getAllPayments };
