import nodemailer from "nodemailer"
import { ApiError } from "../utils/ApiError.js";

const sendEmail = async (to, subject, token) => {

    const verificationLink = `${process.env.FRONTEND_URL}/verify-email?token=${token}`;

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
        html: `
            <div style="font-family: Arial, sans-serif; text-align: center;">
                <h2>Email Verification</h2>
                <p>Click the button below to verify your email:</p>
                <a href="${verificationLink}" style="
                    display: inline-block;
                    padding: 10px 20px;
                    font-size: 16px;
                    color: #fff;
                    background-color: #007bff;
                    text-decoration: none;
                    border-radius: 5px;">
                    Verify Email
                </a>
                <p>Or copy and paste this link in your browser:</p>
                <p><a href="${verificationLink}">${verificationLink}</a></p>
            </div>
        `,
    };

    try {
        const sendMailResponse = await transporter.sendMail(mailOptions);
        console.log("✅ Email sent successfully:", sendMailResponse.response);
    } catch (error) {
        throw new ApiError(500, "Failed to send email");
    }
};

export { sendEmail };