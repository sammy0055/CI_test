"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.lambdaHandler = void 0;
const app_1 = require("./app");
const serverless_http_1 = __importDefault(require("serverless-http"));
const binaryMimeType = [
    "application/json",
    "application/javascript",
    "application/xml",
];
exports.lambdaHandler = (0, serverless_http_1.default)(app_1.app, {
    binary: binaryMimeType,
});
