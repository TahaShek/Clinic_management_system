import Joi from "joi";
import { weekDays } from "../constants/constants.js";

const doctorSchema = Joi.object({
    specialization: Joi.string().min(3).required().messages({
        "any.required": "Specialization is required",
        "string.min": "Specialization must be at least 3 characters long",
    }),
    qualifications: Joi.array().items(Joi.string()).optional(),
    experience: Joi.number().min(0).required().messages({
        "any.required": "Experience is required",
        "number.base": "Experience must be a number",
        "number.min": "Experience cannot be negative",
    }),
    department: Joi.string().optional(),
    contactNumber: Joi.string()
        .pattern(/^\+?[1-9]\d{1,14}$/)
        .required()
        .messages({
            "any.required": "Contact number is required",
            "string.pattern.base": "Invalid phone number format",
        }),
    consultationFee: Joi.number().min(0).required().messages({
        "any.required": "Consultation fee is required",
        "number.base": "Consultation fee must be a number",
        "number.min": "Consultation fee cannot be negative",
    }),
    availability: Joi.array()
        .items(
            Joi.object({
                day: Joi.string()
                    .valid(...weekDays)
                    .required()
                    .messages({
                        "any.required": "Availability day is required",
                        "any.only": "Invalid day of the week",
                    }),
                startTime: Joi.string()
                    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
                    .required()
                    .messages({
                        "any.required": "Start time is required",
                        "string.pattern.base": "Start time must be in HH:mm format (24-hour)",
                    }),
                endTime: Joi.string()
                    .pattern(/^([01]\d|2[0-3]):([0-5]\d)$/)
                    .required()
                    .messages({
                        "any.required": "End time is required",
                        "string.pattern.base": "End time must be in HH:mm format (24-hour)",
                    }),
            })
        )
        .optional(),
    patients: Joi.array().items(Joi.string()).optional(),
    appointments: Joi.array().items(Joi.string()).optional(),
});

export { doctorSchema };
