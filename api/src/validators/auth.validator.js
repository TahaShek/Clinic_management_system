import Joi from "joi";
import { ROLES } from "../constants/constants.js";

const signUpSchema = Joi.object({
    firstName: Joi.string().required().messages({
        "string.empty": "first name is required",
        "any.required": "first name is required",
    }),
    lastName: Joi.string().required().messages({
        "string.empty": "last name is required",
        "any.required": "last name is required",
    }),
    email: Joi.string().email().trim().lowercase().required().messages({
        "string.empty": "Email is required",
        "string.email": "Email must be a valid email address",
        "any.required": "Email is required",
    }),
    password: Joi.string().min(6).required().messages({
        "string.empty": "Password is required",
        "string.min": "Password must be at least 6 characters long",
        "any.required": "Password is required",
    }),
    phoneNumber: Joi.string().optional(),
    // role: Joi.string().valid(...ROLES).messages({
    //     "any.only": `Role must be one of ${ROLES}`,
    // }),
});

const signInSchema = Joi.object({
  email: Joi.string().email().trim().lowercase().messages({
    "string.email": "Email must be a valid email address",
  }),
  phoneNumber: Joi.string(),
  password: Joi.string().required().messages({
    "string.empty": "Password is required",
    "any.required": "Password is required",
  }),
}).or("email", "phoneNumber").messages({
  "object.missing": "Either email or phone number is required",
});


export { signInSchema, signUpSchema };
