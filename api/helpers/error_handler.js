class ErrorHandler {
    sendErrorResponse (res, errCode, obj) {
        res.status(errCode).json(obj);
    }
}