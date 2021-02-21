class ErrorHandler {
    throwError (errorMessage) {
        throw new Error(errorMessage);
    }

    sendResponse (res, statusCode, obj) {
        res.status(statusCode).json(obj);
    }
}