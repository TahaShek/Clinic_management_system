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
    bio: {
        type: String,
    },
    specialization: {
        type: String,
        required: true,
    },
    qualifications: [String],
    yearsOfExperience: {
        type: Number,
        required: true,
    },
    education: {
        type: String,
    },
    hospitalAffiliation: {
        type: String,
        required: true,
    },
    officeAddress: {
        type: String,
    },
    officePhone: {
        type: String,
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
    prefferedCommunication: {
        type: String,
        default: "Phone",
        enum: ["Phone", "Email", "Sms"]
    },
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
