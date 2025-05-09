import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken"
import { MaxAgeOfAccessToken, MaxAgeOfRefreshToken } from "../constants/constants.js";
import { doesArgExist, validateRole } from "../utils/helpers.js";
import { addEmailToQueue } from "../queues/email.queue.js";

const options = {
  httpOnly: true,
  secure: false,
};

const generateAccessAndRefreshToken = async function (userId) {
  try {
    const userInstance = await User.findById(userId);
    const accessToken = await userInstance.generateAccessToken();
    const refreshToken = await userInstance.generateRefreshToken();

    userInstance.refreshToken = refreshToken;

    await userInstance.save({ validateBeforeSave: false }).catch((error) => {
      throw new ApiError(500, error?.message || "Failed to save refresh token");
    });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, error?.message || "Failed to generate tokens");
  }
};

const refreshAccessToken = asyncHandler(async (req, res) => {
  const incomingRefreshToken =
    req.cookies?.refreshToken || req.body?.refreshToken;

  doesArgExist(!incomingRefreshToken, 400, "no token provided");

  try {
    decodedToken = jwt.verify(
      incomingRefreshToken,
      process.env.REFRESH_TOKEN_SECRET
    );
  } catch (error) {
    throw new ApiError(401, "refresh token expired or invalid");
  }

  const user = await User.findById(decodedToken._id);

  if (!user || user.refreshToken !== incomingRefreshToken) {
    throw new ApiError(401, "token verification failed");
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshToken(
    user._id
  );

  return res
    .status(200)
    .cookie("accessToken", accessToken, options)
    .cookie("refreshToken", refreshToken, options)
    .json(
      new ApiResponse(
        200,
        {
          accessToken,
          refreshToken,
        },
        "tokens refreshed successfully"
      )
    );
});

const signUp = asyncHandler(async (req, res) => {
  // maybe we can add a feature if the user want to register right now or not? instead of sending an otp nonetheless
  const { name, email, password, role } = req.body;


  const doesUserExist = await User.findOne({ email });

  doesArgExist(doesUserExist, 409, "user with this email already exists");

    const user = await User.create({
        name,
        email,
        password,
    });

    const createdUser = await User.findById(user._id).select("-password");

  doesArgExist(
    !createdUser,
    500,
    "something went wrong while registering user"
  );

  return res
    .status(201)
    .json(
      new ApiResponse(201, { user: createdUser }, "user created successfully")
    );
});

const signIn = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  doesArgExist(!user, 404, "no records found against this email");

  const doesPasswordMatch = await user.isPasswordCorrect(password);

  doesArgExist(!doesPasswordMatch, 401, "invalid password");

    if(!user.isEmailVerified) {
        const emailVerificationToken = await user.generateEmailVerificationToken();

        const jobId = await addEmailToQueue("sendEmail", { email: user.email, subject: "Verify your email", token: emailVerificationToken });
        console.log("Email added to queue:: ", jobId);
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(user._id);

  const updatedUser = await User.findById(user._id)
    .select("-password -refreshToken")
    .lean();

  doesArgExist(!updatedUser, 500);

  return res
    .status(200)
    .cookie("accessToken", accessToken, {
      ...options,
      maxAge: MaxAgeOfAccessToken,
    })
    .cookie("refreshToken", refreshToken, {
      ...options,
      maxAge: MaxAgeOfRefreshToken,
    })
    .json(
      new ApiResponse(
        200,
        {
          user: updatedUser,
          accessToken,
          refreshToken,
        },
        "user logged in successfully"
      )
    );
});

const logOut = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(
    req?.user?.id,
    {
      $unset: { refreshToken: 1 },
    },
    { new: true }
  );

  doesArgExist(!user, 404, "user not found");

  return res
    .status(200)
    .clearCookie("accessToken", options)
    .clearCookie("refreshToken", options)
    .json(new ApiResponse(200, {}, "user logged out successfully"));
});

const verifyEmail = asyncHandler(async (req, res) => {
    const { token } = req.params;

    doesArgExist(!token, 400, "no token provided");

    let decodedToken;
    try {
        decodedToken = jwt.verify(token, process.env.EMAIL_VERIFICATION_TOKEN_SECRET);
    } catch (error) {
        throw new ApiError(401, "Invalid or expired token");
    }

    const user = await User.findById(decodedToken._id);

    doesArgExist(!user, 404, "user not found");

    if (user.isEmailVerified) {
        return res.status(200).json(new ApiResponse(200, {}, "Email already verified"));
    }

    user.isEmailVerified = true;
    await user.save({ validateBeforeSave: false });

    return res.status(200).json(new ApiResponse(200, {}, "email verified successfully"));
});

const getAllUsers = asyncHandler(async (req, res) => {
    // TODO: pagination
    const {user} = req;
    validateRole("admin", user.role);

    const users = await User.find().select("-password -refreshToken").lean();

    return res.status(200).json(
        new ApiResponse(
            200,
            { users },
            "Users fetched successfully"
        )
    );
});
const tryMe = async (req, res) => {
  return res
    .status(200)
    .json(
      new ApiResponse(
        200,
        { user: "va lo lo tab tab taba di va saktu sak sak saka lee" },
        "ok"
      )
    );
};

export { signUp, signIn, refreshAccessToken, logOut, verifyEmail, getAllUsers, tryMe };
