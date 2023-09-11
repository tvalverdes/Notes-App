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
exports.deleteNote = exports.postNote = exports.updateNote = exports.getNote = exports.getNotes = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const getNote = (req, res) => {
    try {
    }
    catch (error) {
    }
};
exports.getNote = getNote;
const getNotes = (req, res) => {
    try {
        const notes = prisma.note.findMany({
            where: {
                id: 1
            },
        });
        res.send(notes);
    }
    catch (error) {
    }
};
exports.getNotes = getNotes;
const updateNote = (req, res) => {
    try {
    }
    catch (error) {
    }
};
exports.updateNote = updateNote;
const postNote = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { text, userId } = req.body;
        const note = yield prisma.note.create({
            data: {
                text,
                userId,
            },
        });
        res.status(201).send(note);
    }
    catch (error) {
    }
});
exports.postNote = postNote;
const deleteNote = (req, res) => {
    try {
    }
    catch (error) {
    }
};
exports.deleteNote = deleteNote;
//# sourceMappingURL=noteController.js.map