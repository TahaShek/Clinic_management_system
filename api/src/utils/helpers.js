import { ApiError } from "./ApiError.js"

const doesArgExist = (value, statusCode, message) => {
    if (value) {
        throw new ApiError(statusCode, message);
    }
};

const validateRole = (expectedRole, actualRole, statusCode = 401, message = "Access Denied") => {
    if(expectedRole !== actualRole) {
        throw new ApiError(statusCode, message);
    }
};

export { doesArgExist, validateRole };