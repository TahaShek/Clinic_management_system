
import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { validateRequest } from "../middlewares/validate.middleware.js";
import { doctorSchema } from "../validators/doctor.validator.js";
import { getDoctors, registerDoctor } from "../controllers/doctor.controller.js";

const router = Router();

router.route("/").get(verifyJwt, getDoctors);

router.route("/register").post(verifyJwt, validateRequest(doctorSchema), registerDoctor);

export default router;