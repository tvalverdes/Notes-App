"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
exports.router = router;
/* router.get('/signin', (req, res, next) => {
  res.send('GET request to the homepage')
  res.end
}) */
router.get('/', userController_1.getUsers);
router.get('/:id', userController_1.getUser);
router.post('/', userController_1.postUser);
router.put('/:id', userController_1.updateUser);
router.delete('/:id', userController_1.deleteUser);
router.get('/setcookie', (res) => {
    res.cookie('Nombre de cookie', 'valor de cookie', {
        maxAge: 5000,
    });
});
//# sourceMappingURL=users.js.map