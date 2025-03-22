import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { getAllPatients, registerPatient } from "../controllers/patient.controller.js";
import { validateRequest } from "../middlewares/validate.middleware.js";
import { patientSchema } from "../validators/patient.validator.js";

const router = Router();

router.route("/").get(verifyJwt, getAllPatients);

router.route("/register").post(verifyJwt, validateRequest(patientSchema), registerPatient);

export default router;