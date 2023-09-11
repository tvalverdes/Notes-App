"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponse = void 0;
const errorResponse = (res, statusCode, errorMessage) => {
    res.status(statusCode);
    throw errorMessage;
};
exports.errorResponse = errorResponse;
//# sourceMappingURL=error.handler.js.map