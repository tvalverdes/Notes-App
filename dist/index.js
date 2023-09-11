"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
require("dotenv/config");
const port = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 1234;
const routes_1 = __importDefault(require("./routes"));
app.use((0, cookie_parser_1.default)());
app.listen(port, () => console.log(`Server running on http://localhost:${port}`));
app.use(routes_1.default);
//# sourceMappingURL=index.js.map