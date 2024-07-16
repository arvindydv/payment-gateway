import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Payment } from "../models/payment.model.js";
import generateUniqueId from "generate-unique-id";

//  create payment controller
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

  if (isNaN(payload.amount) || parseFloat(payload.amount) <= 0) {
    return res.status(400).json({
      status: 400,
      data: {},
      message: "Please enter a valid amount greater than zero",
    });
  }

  payload.userId = req.user._id;
  const payment = await Payment.create(payload);

  return res.status(201).json(new ApiResponse(201, payment, ""));
});

// process payment controller
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

// get single payment by id
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

// get all  my payments
const getAllPayments = asyncHandler(async (req, res) => {
  const payment = await Payment.find({
    userId: req.user._id,
  });

  return res
    .status(200)
    .json(new ApiResponse(200, payment, "All payments get successfully"));
});

export { createPayment, processPayment, getPaymentStatus, getAllPayments };
