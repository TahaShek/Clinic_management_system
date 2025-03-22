import Joi from "joi";
import { bloodTypes, genders } from "../constants/constants.js";

const patientSchema = Joi.object({
    dateOfBirth: Joi.date().iso().less("now").required().messages({
        "any.required": "Date of birth is required",
        "date.base": "Date of birth must be a valid date",
        "date.less": "Date of birth must be in the past",
    }),
    gender: Joi.string()
        .valid(...genders)
        .required()
        .messages({
            "any.required": "Gender is required",
            "any.only": "Invalid gender selection",
        }),
    bloodType: Joi.string()
        .valid(...bloodTypes)
        .optional()
        .messages({
            "any.only": "Invalid blood type selection",
        }),
    contactNumber: Joi.string()
        .pattern(/^\+?[1-9]\d{1,14}$/)
        .required()
        .messages({
            "any.required": "Contact number is required",
            "string.pattern.base": "Invalid phone number format",
        }),
    address: Joi.object({
        street: Joi.string().optional(),
        city: Joi.string().required().messages({
            "any.required": "City is required",
        }),
        state: Joi.string().optional(),
        postalCode: Joi.string()
            .pattern(/^\d{4,10}$/)
            .optional()
            .messages({
                "string.pattern.base": "Invalid postal code format",
            }),
        country: Joi.string().required().messages({
            "any.required": "Country is required",
        }),
    }),
    emergencyContact: Joi.object({
        name: Joi.string().optional(),
        relationship: Joi.string().optional(),
        phone: Joi.string()
            .pattern(/^\+?[1-9]\d{1,14}$/)
            .optional()
            .messages({
                "string.pattern.base": "Invalid phone number format",
            }),
    }).optional(),
    medicalHistory: Joi.array()
        .items(
            Joi.object({
                condition: Joi.string().required().messages({
                    "any.required": "Medical condition is required",
                }),
                diagnosisDate: Joi.date().iso().less("now").optional().messages({
                    "date.base": "Diagnosis date must be a valid date",
                    "date.less": "Diagnosis date must be in the past",
                }),
                medications: Joi.array().items(Joi.string()).optional(),
                doctor: Joi.string().optional(),
            })
        )
        .optional(),
    allergies: Joi.array().items(Joi.string()).optional(),
    appointments: Joi.array().items(Joi.string()).optional(),
});

export { patientSchema };