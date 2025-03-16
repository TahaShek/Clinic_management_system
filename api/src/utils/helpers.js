import { ApiError } from "./ApiError.js"

const doesArgExist = (value, statusCode, message) => {
    if (value) {
        throw new ApiError(statusCode, message);
    }
};

export { doesArgExist };