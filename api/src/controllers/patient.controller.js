import mongoose from "mongoose";
import { Patient } from "../models/patient.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { doesArgExist, validateRole } from "../utils/helpers.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";

const registerPatient = asyncHandler(async (req, res) => {
    const { user } = req;

    if(!user?.isEmailVerified) {
        throw new ApiError(401, "User email is not verified");
    }

    const existingPatient = await Patient.findOne({ user: user._id }).lean();

    doesArgExist(existingPatient, 409, "Patient already exists");

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const createdPatient = await Patient.create(
            [{ user: user._id, ...req.body }],
            { session }
        );

        doesArgExist(!createdPatient, 500, "Something went wrong while registering patient");

        user.role = "patient";
        await user.save({ session });

        await session.commitTransaction();
        await session.endSession();

        const patient = await Patient.findById(createdPatient[0]._id).populate("user", "-password -refreshToken").lean();

        return res.status(201).json(new ApiResponse(201, { patient }, "Patient registered successfully"));
    } catch (error) {
        await session.abortTransaction();
        await session.endSession();
        throw error;
    }
});

// doctors -> fetch patients they treated
// const getPatients = asyncHandler(async (req, res) => {
//     const { user } = req;
//     validateRole("doctor", user.role);

//     const 
// });

// admin -> fetch all patients
const getAllPatients = asyncHandler(async (req, res) => {
    // TODO: pagination
    const {user} = req;
    validateRole("admin", user.role);

    const patients = await Patient.find().populate("user", "name").lean();

    return res.status(200).json(
        new ApiResponse(
            200,
            { patients },
            "Patients fetched successfully"
        )
    );
});

export { registerPatient, getAllPatients }; 