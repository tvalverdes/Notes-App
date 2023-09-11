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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.tokenSign = void 0;
require('dotenv').config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const tokenSign = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return jsonwebtoken_1.default.sign({
            name: user.name,
            id: user.id,
        }, process.env.JWT_SECRET, {
            expiresIn: '8h',
        });
    }
    catch (err) {
        console.log(err);
    }
});
exports.tokenSign = tokenSign;
const verifyToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
    }
    catch (err) {
        return null;
    }
});
exports.verifyToken = verifyToken;
//# sourceMappingURL=jwt.handler.js.map