// schemas/doctor-registration.ts
import { z } from "zod";

// Define reusable validation messages
const validationMessages = {
  required: "This field is required",
  licenseNumber: {
    min: "License number must be at least 5 characters",
  },
  yearsOfExperience: {
    min: "Please enter a valid number of years",
  },
  phone: {
    invalid: "Please enter a valid phone number",
  },
  fee: {
    min: "Consultation fee must be positive",
  },
};

// Define the main schema
export const doctorRegistrationSchema = z.object({
  // Step 1 Fields
  specialization: z.string().min(1, validationMessages.required),
  licenseNumber: z.string().min(5, validationMessages.licenseNumber.min),
  yearsOfExperience: z
    .string()
    .min(1, validationMessages.yearsOfExperience.min),
  education: z
    .string()
    .min(10, "Please provide detailed education information"),

  // Step 2 Fields
  hospitalAffiliation: z.string().min(1, validationMessages.required),
  officeAddress: z.string().min(10, "Please provide a complete address"),
  officePhone: z.string().min(10, validationMessages.phone.invalid),
  consultationFee: z.string().min(1, validationMessages.fee.min),

  // Step 3 Fields
  availability: z.string().min(10, "Please provide detailed availability"),
  bio: z.string().min(20, "Bio should be at least 20 characters"),
  preferredCommunication: z.enum(["email", "phone", "sms"]).default("email"),
});

// Extract the inferred type
export type DoctorRegistrationFormData = z.infer<
  typeof doctorRegistrationSchema
>;
