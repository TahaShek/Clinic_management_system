import { Router } from "express";
import { verifyJwt } from "../middlewares/auth.middleware.js"
import { getAllUsers, logOut, refreshAccessToken, signIn, signUp, tryMe, verifyEmail } from "../controllers/auth.controller.js";
import { validateRequest } from "../middlewares/validate.middleware.js";
import { signInSchema, signUpSchema } from "../validators/auth.validator.js"

const router = Router();

router.route("/").get(verifyJwt, getAllUsers);

router.route("/sign-up").post(validateRequest(signUpSchema), signUp);

router.route("/sign-in").post(validateRequest(signInSchema), signIn);

router.route("/log-out").post(verifyJwt, logOut);

router.route("/refresh-token").post(refreshAccessToken);

router.route("/verify-email/:token").get(verifyEmail);

// just to check tokens and response structure
router.route("/fun").get(verifyJwt, tryMe);

export default router;