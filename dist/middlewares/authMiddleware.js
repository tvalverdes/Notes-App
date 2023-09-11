"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkAuth = void 0;
const jwt_handler_1 = require("../utils/jwt.handler");
const error_handler_1 = require("../utils/error.handler");
const checkAuth = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (!req.headers.authorization) {
            throw (0, error_handler_1.errorResponse)(res, 401, 'Token de autorización faltante');
        }
        const token = req.headers.authorization.split(' ').pop();
        if (!token) {
            throw (0, error_handler_1.errorResponse)(res, 400, 'Token inválido');
        }
        const tokenData = yield (0, jwt_handler_1.verifyToken)(token);
        console.log(tokenData);
        if (!tokenData) {
            throw (0, error_handler_1.errorResponse)(res, 400, 'Token no coincide en la verificación');
        }
        next();
    }
    catch (error) {
        res.send({ message: error });
    }
});
exports.checkAuth = checkAuth;
//# sourceMappingURL=authMiddleware.js.map