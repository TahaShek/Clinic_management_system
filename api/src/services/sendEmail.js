import nodemailer from "nodemailer"
import { ApiError } from "../utils/ApiError.js";

const sendEmail = async (to, subject, text) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to,
        subject,
        text,
    };

    try {
        const sendMailResponse = await transporter.sendMail(mailOptions);
        console.log("sendMailResponse", sendMailResponse);
        console.log("OTP email sent to:", to);
    } catch (error) {
        console.error("Error sending email:", error);
        throw new ApiError(500, "Failed to send email");
    }
};

export { sendEmail };