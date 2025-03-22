import mongoose from "mongoose";
import { requestStatusValues, weekDays } from "../constants/constants.js";

const doctorSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
        unique: true,
        index: true,
    },
    specialization: {
        type: String,
        required: true,
    },
    qualifications: [String],
    experience: {
        type: Number,
        required: true,
    },
    department: {
        type: String,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    consultationFee: {
        type: Number,
        required: true,
    },
    availability: [
        {
            day: {
                type: String,
                enum: weekDays,
            },
            startTime: String,
            endTime: String,
        },
    ],
    patients: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Patients",
        },
    ],
    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointments",
        },
    ],
    status: {
        type: String,
        enum: requestStatusValues,
        default: "Pending"
    }
}, { timestamps: true });

export const Doctor = mongoose.model("Doctors", doctorSchema);
