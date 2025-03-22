import mongoose from "mongoose";
import { requestStatusValues } from "../constants/constants.js";
import { Doctor } from "../models/doctor.model.js";
import { Admin } from "../models/admin.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { validateRole, doesArgExist } from "../utils/helpers.js";

const registerAdmin = asyncHandler(async (req, res) => {
    const { user } = req;

    // if(!user?.isEmailVerified) {
    //     throw new ApiError(401, "User email is not verified");
    // }

    const alreadyAnAdmin = await Admin.findOne({ user: user._id }).lean();

    doesArgExist(alreadyAnAdmin, 404, "User is already an admin");

    const admin = await Admin.create({ user: user._id });

    user.role = "admin";
    await user.save();

    return res.status(201).json(
        new ApiResponse(201, { admin }, "Admin registed successfully")
    );
});

const getDoctorsRequests = asyncHandler(async (req, res) => {
    const { user } = req;
    validateRole("admin", user.role);

    const reqs = await Admin.findOne({ user: user._id });

    if (!reqs || reqs.length === 0) {
        return res.status(404).json(
            new ApiResponse(404, { requests: reqs }, "No request found")
        );
    }
    return res.status(200).json(
        new ApiResponse(200, { requests: reqs }, "Request fetched successfully")
    )
});

const concludeDoctorRequest = asyncHandler(async (req, res) => {
    const { user } = req;
    validateRole("admin", user.role);

    const { id: doctor_id } = req.params;
    const { action } = req.body;

    if (!requestStatusValues.includes(action)) {
        throw new ApiError(400, "Invalid action");
    }

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const doctor = await Doctor.findOne({ _id: doctor_id, status: "Pending" }).session(session);
        doesArgExist(!doctor, 404, "Doctor request not found or already processed");

        doctor.status = action;
        await doctor.save({ session });

        const admin = await Admin.findOne({ user: user._id }).session(session);
        doesArgExist(!admin, 404, "Admin record not found");

        await admin.requestProcessed(doctor._id, doctor.status);

        await session.commitTransaction();
        session.endSession();

        return res.status(200).json(
            new ApiResponse(200, { doctor }, `Doctor request ${action} successfully`)
        );
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        throw error;
    }
});

export { registerAdmin, concludeDoctorRequest, getDoctorsRequests };
