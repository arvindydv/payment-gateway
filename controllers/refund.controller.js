import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { Payment } from "../models/payment.model.js";
import { Refund } from "../models/refund.model.js";
import generateUniqueId from "generate-unique-id";
import mongoose from "mongoose";

const refundPayment = asyncHandler(async (req, res) => {
  const paymentId = req.params.id;
  const userId = req.user._id;

  const session = await mongoose.startSession();
  session.startTransaction();

  const payment = await Payment.findOne({ _id: paymentId, userId }).session(
    session
  );

  if (!payment) {
    await session.abortTransaction();
    session.endSession();
    return res.status(404).json(new ApiResponse(404, {}, "Payment not found"));
  }

  if (payment.status !== "completed") {
    await session.abortTransaction();
    session.endSession();
    return res
      .status(400)
      .json(new ApiResponse(400, {}, "Payment not eligible for refund"));
  }

  const transactionId = generateUniqueId();

  const refund = new Refund({
    paymentId,
    amount: payment.amount,
    status: "completed",
    transactionId,
  });

  await refund.save({ session });

  payment.status = "refunded";
  await payment.save({ session });

  await session.commitTransaction();
  session.endSession();

  return res
    .status(200)
    .json(new ApiResponse(200, refund, "Amount refunded successfully"));
});

export { refundPayment };
