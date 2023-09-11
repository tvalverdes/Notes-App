"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyLogin = void 0;
const error_handler_1 = require("./error.handler");
const verifyLogin = (res, email, password) => {
    if (!email || !password) {
        throw (0, error_handler_1.errorResponse)(res, 400, 'Email y contraseña son requeridos');
    }
};
exports.verifyLogin = verifyLogin;
//# sourceMappingURL=dataField.handler.js.map