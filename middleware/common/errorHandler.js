/**
 * Title: error handler middlerwares
 */

// external import
const createError = require("http-errors");


// 404 error handler
const notFoundHandler = (req, res, next) => {
    console.log("call 404 error handler");
    next(createError(404, "Requested content not found or content has been removed!"));
}


// default error handler
const defaultErrorHandler = (err, req, res, next) => {
    console.log("call default error handler");
    const errorMessage = process.env.NODE_ENV === "development" ? err : err.message;
    // http error code
    res.status(err.status || 500);
    res.json({
        "error": errorMessage
    })
}


module.exports = {
    notFoundHandler,
    defaultErrorHandler
}