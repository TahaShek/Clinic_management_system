import { Queue } from "bullmq";
import { redisConnection } from "../constants/constants.js";


const emailQueue = new Queue("email-queue", { connection: redisConnection });

async function addEmailToQueue(jobName = "sendEmail", jobData) {
    const job = await emailQueue.add(jobName, jobData);
    return job.id;
};

export { addEmailToQueue };