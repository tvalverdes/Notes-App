"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const noteController_1 = require("../controllers/noteController");
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', noteController_1.getNote);
router.get('/:id', noteController_1.getNotes);
router.post('/', noteController_1.postNote);
router.put('/:id', noteController_1.updateNote);
router.delete('/:id', noteController_1.deleteNote);
//# sourceMappingURL=notes.js.map