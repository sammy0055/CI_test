"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
exports.app = (0, express_1.default)();
const port = 5000;
exports.app.get("/", (req, res) => {
    res.send("Express + TypeScript Server");
});
exports.app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
