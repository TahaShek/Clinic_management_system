import Joi from "joi";
import { possibleAppointmentStatusValues } from "../constants/constants.js";

const appointmentSchema = Joi.object({
    patient: Joi.string().required().messages({
        "any.required": "Patient ID is required",
        "string.empty": "Patient ID cannot be empty",
    }),
    doctor: Joi.string().required().messages({
        "any.required": "Doctor ID is required",
        "string.empty": "Doctor ID cannot be empty",
    }),
    concludedBy: Joi.string().optional().messages({
        "string.empty": "Concluded by must be a valid doctor ID",
    }),
    statusUpdatedAt: Joi.date().iso().default(() => new Date()).messages({
        "date.base": "Status updated date must be a valid date",
    }),
    scheduledDate: Joi.string()
        .pattern(/^\d{4}-\d{2}-\d{2}$/)
        .required()
        .messages({
            "any.required": "Scheduled date is required",
            "string.pattern.base": "Scheduled date must be in YYYY-MM-DD format",
        }),
    scheduledTime: Joi.string()
        .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
        .required()
        .messages({
            "any.required": "Scheduled time is required",
            "string.pattern.base": "Scheduled time must be in HH:mm format (24-hour)",
        }),
    reasonForVisit: Joi.string().min(5).required().messages({
        "any.required": "Reason for visit is required",
        "string.min": "Reason for visit must be at least 5 characters long",
    }),
    isPaymentCompleted: Joi.boolean().default(false),
    appointmentStatus: Joi.string()
        .valid(...possibleAppointmentStatusValues)
        .default("Scheduled")
        .messages({
            "any.only": "Invalid appointment status",
        }),
});

export { appointmentSchema };
