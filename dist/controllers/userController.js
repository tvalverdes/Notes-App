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
exports.deleteUser = exports.postUser = exports.updateUser = exports.getUsers = exports.getUser = void 0;
const client_1 = require("@prisma/client");
const bcrypt_1 = require("bcrypt");
const prisma = new client_1.PrismaClient();
const getUser = (req, res) => {
    try {
    }
    catch (error) { }
};
exports.getUser = getUser;
const getUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield prisma.user.findMany({
            select: {
                name: true,
                lastName: true,
                email: true,
            },
        });
        res.send(users);
    }
    catch (error) { }
});
exports.getUsers = getUsers;
const updateUser = (req, res) => {
    try {
    }
    catch (error) { }
};
exports.updateUser = updateUser;
const postUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, lastName, email } = req.body;
        const password = yield (0, bcrypt_1.hash)(req.body.password, 13);
        const user = yield prisma.user.create({
            data: {
                name,
                lastName,
                email,
                password,
            },
        });
        res.status(201).json({ user });
    }
    catch (error) { }
});
exports.postUser = postUser;
const deleteUser = (req, res) => {
    try {
    }
    catch (error) { }
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map