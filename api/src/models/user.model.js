import mongoose from "mongoose";
import { ROLES } from "../constants/constants.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "email is required"],
      trim: true,
      index: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, "password is required"],
    },
    role: {
        type: String,
        enum: ROLES,
        default: "guest",
    },
    isEmailVerified: {
      type: Boolean,
      default: false,
    },
    refreshToken: {
      type: String,
      default: "",
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateAccessToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateRefreshToken = async function () {
  return jwt.sign(
    {
      _id: this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
      expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
    }
  );
};
userSchema.methods.generateEmailVerificationToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.EMAIL_VERIFICATION_TOKEN_SECRET,
        {
            expiresIn: process.env.EMAIL_VERIFICATION_TOKEN_EXPIRY
        }
    )
};

export const User = mongoose.model("Users", userSchema);
