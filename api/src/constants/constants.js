export const DB_NAME = "hospitalSystem";

export const ROLES = ["admin", "doctor", "patient", "user"];

export const MaxAgeOfAccessToken = 1 * 24 * 60 * 1000; // 1d
export const MaxAgeOfRefreshToken = 7 * 24 * 60 * 60 * 1000; // 7d

export const redisConnection = {
    host: process.env.REDIS_HOST || "127.0.0.1",
    port: process.env.REDIS_PORT || 6379,
};