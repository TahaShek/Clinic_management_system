// database name
export const DB_NAME = "hospitalSystem";

// utils/general
export const MaxAgeOfAccessToken = 1 * 24 * 60 * 1000; // 1d
export const MaxAgeOfRefreshToken = 7 * 24 * 60 * 60 * 1000; // 7d

export const redisConnection = {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
};

export const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

// user roles
export const ROLES = ["admin", "doctor", "patient", "guest"];
export const genders = ["Male", "Female", "Other"];

// admin
export const requestStatusValues = ["Pending", "Approved", "Rejected"];

// appointments
export const possibleAppointmentStatusValues = ["Scheduled", "Completed", "Cancelled"];

// patients
export const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];