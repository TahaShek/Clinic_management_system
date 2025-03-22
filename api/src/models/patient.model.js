import mongoose from "mongoose";
import { bloodTypes, genders } from "../constants/constants.js";

const patientSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true,
        index: true,
        unique: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
    },
    gender: {
        type: String,
        enum: genders,
        required: true,
    },
    bloodType: {
        type: String,
        enum: bloodTypes,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    address: {
        street: String,
        city: String,
        state: String,
        postalCode: String,
        country: String,
    },
    emergencyContact: {
        name: String,
        relationship: String,
        phone: String,
    },
    medicalHistory: [
        {
            condition: String,
            diagnosisDate: Date,
            medications: [String],
            doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctors" },
        },
    ],
    allergies: [String],
    appointments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Appointments",
        },
    ],
}, { timestamps: true });

export const Patient = mongoose.model("Patients", patientSchema);
