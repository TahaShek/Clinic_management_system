import { Worker } from "bullmq";
import { redisConnection } from "../constants/constants.js";
import { sendEmail } from "../services/sendEmail.js";


const emailWorker = new Worker("email-queue",
    async (job) => {
        console.log("Proccessing Job:: ", job.id);
        const { email, subject, token } = job.data;
        await sendEmail(email, subject, token);
    },
    { connection: redisConnection }
);

emailWorker.on("completed", (job) => {
    console.log(`Job ${job.id} completed successfully`);
});

emailWorker.on("failed", (job, err) => {
    console.error(`Job ${job.id} failed:`, err);
});

