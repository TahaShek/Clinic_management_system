
import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { concludeDoctorRequest, getDoctorsRequests, registerAdmin } from "../controllers/admin.controller.js";

const router = Router();

router.route("/register").post(verifyJwt, registerAdmin);

router.route("/doctors-request").get(verifyJwt, getDoctorsRequests);

router.route("/conclude-request/:id").post(verifyJwt, concludeDoctorRequest);

export default router;