import Joi from "joi";
import { weekDays, requestStatusValues } from "../constants/constants.js"; // Assuming weekDays and requestStatusValues are imported

const doctorSchema = Joi.object({
    user: Joi.string().required().messages({
        "any.required": "User is required",
    }),
    bio: Joi.string().optional(),
    specialization: Joi.string().min(3).required().messages({
        "any.required": "Specialization is required",
        "string.min": "Specialization must be at least 3 characters long",
    }),
    qualifications: Joi.array().items(Joi.string()).optional(),
    yearsOfExperience: Joi.number().min(0).required().messages({
        "any.required": "Years of experience is required",
        "number.base": "Years of experience must be a number",
        "number.min": "Experience cannot be negative",
    }),
    education: Joi.string().optional(),
    hospitalAffiliation: Joi.string().min(1).required().messages({
        "any.required": "Hospital affiliation is required",
        "string.min": "Hospital affiliation must be at least 1 character long",
    }),
    officeAddress: Joi.string().optional(),
    officePhone: Joi.string()
        .pattern(/^\+?[1-9]\d{1,14}$/)
        .optional()
        .messages({
            "string.pattern.base": "Invalid office phone number format",
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
    prefferedCommunication: Joi.string()
        .valid("Phone", "Email", "Sms")
        .default("Phone")
        .optional()
        .messages({
            "any.only": "Preferred communication must be one of 'Phone', 'Email', or 'Sms'",
        }),
    patients: Joi.array().items(Joi.string()).optional(),
    appointments: Joi.array().items(Joi.string()).optional(),
    status: Joi.string()
        .valid(...requestStatusValues)
        .default("Pending")
        .optional()
        .messages({
            "any.only": "Status must be one of " + requestStatusValues.join(", "),
        }),
});

export { doctorSchema };
