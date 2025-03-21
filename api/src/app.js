
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "node:http";
import { errorHandler } from "./middlewares/errorHandler.middleware.js";

const app = express();
const server = http.createServer(app);

app.use(
    cors({
        origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
        credentials: true,
    })
);

app.use(express.json({ limit: "20kb" }));
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(cookieParser());

// routes
import authRoutes from "./routes/auth.routes.js"
import patientRoutes from "./routes/patient.routes.js"
import doctorRoutes from "./routes/doctor.routes.js"
import adminRoutes from "./routes/admin.routes.js"

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/patient", patientRoutes);
app.use("/api/v1/doctor", doctorRoutes);

app.get("/", (req, res) => {
    res.send("Welcome...");
});

app.use(errorHandler);

export { server };