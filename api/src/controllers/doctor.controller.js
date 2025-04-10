import { Admin } from "../models/admin.model.js";
import { Doctor } from "../models/doctor.model.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { doesArgExist } from "../utils/helpers.js";

const registerDoctor = asyncHandler(async (req, res) => {
    const { user } = req;

    // if(!user?.isEmailVerified) {
    //     throw new ApiError(401, "User email is not verified");
    // }

    const isUserAlreadyDoctor = await Doctor.findOne({ user: user._id }).lean();

    doesArgExist(isUserAlreadyDoctor, 409, "User is already a doctor");

    const doctor = await Doctor.create({
        user: user._id,
        ...req.body,
    });

    doesArgExist(!doctor, 500, "Somthing went wrong while registering doctor");

    const admin = await Admin.findOne();
    if (admin) {
        admin.doctorRequests.push({
            doctor: doctor._id,
            status: "Pending"
        });
        await admin.save();
    } else {
        throw new ApiError(404, "No admins found to ping doctos request");
    }

    // Emit a real-time event via WebSocket (Optional)
    // req.io.emit("newDoctorRequest", { doctorId: doctor._id });

    return res.status(201).json(
        new ApiResponse(201, { doctor }, "Doctor registration request sent to admin")
    );
});

const getDoctors = asyncHandler(async (req, res) => {
    const doctors = await Doctor.find();

    return res.status(200).json(
        new ApiResponse(200, { doctors }, "done")
    )
});

export { registerDoctor, getDoctors };