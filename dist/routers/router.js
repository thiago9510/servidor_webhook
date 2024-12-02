"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const webhook_Controllers_1 = require("../webhook/controllers/webhook.Controllers");
exports.router = express_1.default.Router();
exports.router.get('/', (req, res) => {
    res.status(200).json({ "server": "Online" });
});
//simula o evento que recebe os dados
exports.router.post('/msg', webhook_Controllers_1.webHookControllersSendMenssage);
