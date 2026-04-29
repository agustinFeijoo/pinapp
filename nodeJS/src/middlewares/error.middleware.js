"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
const errorHandler = (err, _req, res, _next) => {
    if (err.response) {
        // Error del MS-A (Spring Boot)
        return res.status(err.response.status).json({
            status: err.response.status,
            message: err.response.data?.message || "Error from MS-A",
            timestamp: new Date().toISOString()
        });
    }
    // Error interno del BFF
    return res.status(500).json({
        status: 500,
        message: "Internal BFF error",
        timestamp: new Date().toISOString()
    });
};
exports.errorHandler = errorHandler;
