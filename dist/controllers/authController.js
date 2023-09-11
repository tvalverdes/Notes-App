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
exports.showRegister = exports.showLogin = exports.loginCtrl = void 0;
const client_1 = require("@prisma/client");
const jwt_handler_1 = require("../utils/jwt.handler");
const bcrypt_1 = require("bcrypt");
const error_handler_1 = require("../utils/error.handler");
const prisma = new client_1.PrismaClient();
const loginCtrl = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = req.body;
        const user = yield prisma.user.findUnique({
            where: { email: email },
        });
        if (!user) {
            throw (0, error_handler_1.errorResponse)(res, 404, 'Usuario no encontrado');
        }
        const validPassword = yield (0, bcrypt_1.compare)(password, user.password);
        const tokenSession = yield (0, jwt_handler_1.tokenSign)(user);
        const data = {
            id: user.id,
            name: user.name,
            lastName: user.lastName,
            email,
        };
        if (validPassword) {
            res.send({
                data: data,
                tokenSession,
            });
            return;
        }
        else {
            throw (0, error_handler_1.errorResponse)(res, 403, 'Contraseña incorrecta');
        }
    }
    catch (error) {
        res.send({ error });
    }
});
exports.loginCtrl = loginCtrl;
const showLogin = (req, res) => {
    res.send('<h1>Interfaz de login</h1>');
};
exports.showLogin = showLogin;
const showRegister = (req, res) => {
    res.send('<h1>Interfaz de registro</h1>');
};
exports.showRegister = showRegister;
//# sourceMappingURL=authController.js.map