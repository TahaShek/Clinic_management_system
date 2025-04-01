// schemas/patient-registration.ts
import { z } from "zod";

export const patientRegistrationSchema = z.object({
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  gender: z.string().min(1, "Gender is required"),
  bloodType: z.string().min(1, "Blood type is required"),
  height: z.string().min(1, "Height is required"),
  weight: z.string().min(1, "Weight is required"),
  allergies: z.string().optional(),
  chronicConditions: z.string().optional(),
  currentMedications: z.string().optional(),
  primaryPhysician: z.string().optional(),
  emergencyContactName: z.string().min(1, "Emergency contact name is required"),
  emergencyContactRelationship: z.string().min(1, "Relationship is required"),
  emergencyContactPhone: z.string().min(1, "Phone number is required"),
  insuranceProvider: z.string().optional(),
  insurancePolicyNumber: z.string().optional(),
  preferredPharmacy: z.string().optional(),
  preferredCommunication: z.string().default("email"),
});

export type PatientRegistrationFormData = z.infer<typeof patientRegistrationSchema>;