import mongoose from "mongoose";
import { possibleAppointmentStatusValues } from "../constants/constants.js";


const appointmentSchema = new mongoose.Schema({
    patient: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patients",
        required: [true, "Patient is required"],
    },
    // feature -> user can ping multiple doctors for appointment if they multiple are available in that time slot
    doctor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctors",
        required: [true, "Doctor is required"],
    },
    concludedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctors",
    },
    statusUpdatedAt: {
        type: Date,
        default: () => Date.now(),
    },
    scheduledDate: {
        type: String,
        required: [true, "Scheduled date is required"],
    },
    scheduledTime: {
        type: String,
        required: [true, "Scheduled time is required"],
    },
    reasonForVisit: {
        type: String,
        required: [true, "Reason for visit is required"],
    },
    isPaymentCompleted: {
        type: Boolean,
        default: false,
    },
    appointmentStatus: {
        type: String,
        enum: possibleAppointmentStatusValues,
        default: "Scheduled",
    }
}, {timestamps: true});

export const Appointment = mongoose.model("Appointments", appointmentSchema);