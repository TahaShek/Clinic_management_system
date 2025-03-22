import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        index: true,
        required: true,
    },
    doctorRequests: [
        {
            doctor: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Doctors",
                required: true,
            },
            status: {
                type: String,
                enum: ["Pending", "Approved", "Rejected"],
                default: "Pending",
            },
            requestedAt: {
                type: Date,
                default: () => Date.now(),
            },
            reviewedAt: {
                type: Date,
            },
        },
    ],
}, { timestamps: true });

adminSchema.methods.requestProcessed = async function (doctorId, status) {
    const request = this.doctorRequests.find(req => req.doctor.equals(doctorId));

    if (!request) {
        throw new Error("Doctor request not found");
    }

    request.status = status;
    request.reviewedAt = new Date();

    await this.save();
};



export const Admin = mongoose.model("Admins", adminSchema);