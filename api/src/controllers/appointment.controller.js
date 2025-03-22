import { Appointment } from "../models/appointments.model.js";
import { ApiResponse } from "../utils/ApiResponse";
import { asyncHandler } from "../utils/asyncHandler.js";
import { doesArgExist, validateRole } from "../utils/helpers.js";

const scheduleAppointment = asyncHandler(async (req, res) => {
    const { user } = req;
    validateRole("patient", user.role);

    const isAnyAppointmentAlreadyScheduled = await Appointment.findOne({ patient: user._id, appointmentStatus: "Scheduled" }).lean();

    doesArgExist(isAnyAppointmentAlreadyScheduled, 409, "Appointment already scheduled");

    const newAppointment = await Appointment.create({
        patient: user._id,
        ...req.body,
    });

    doesArgExist(!newAppointment, 500, "Somthing went wrong while scheduling appointment");

    return res.status(201).json(
        new ApiResponse(
            201,
            { appointment: newAppointment },
            "Appointment Scheduled successfully"
        )
    );
});

export { scheduleAppointment };