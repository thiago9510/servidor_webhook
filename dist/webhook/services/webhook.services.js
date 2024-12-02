"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebHookServices = void 0;
const node_fetch_1 = __importDefault(require("node-fetch"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
class WebHookServices {
    /**
     * Método para Enviar mensagens pelo Webhook
     * @param {string} message - Mensagem a ser enviada
     * @returns {object} Retorna o status da resposta do webhook
     * @throws {Error} Se a Requisição falar
     */
    async SendMenssage(message) {
        const contentBody = JSON.stringify(message);
        try {
            const sendFetch = await (0, node_fetch_1.default)(`${process.env.URL_WEBHOOK_NOTIFICATION}`, {
                method: "POST",
                headers: {
                    "content-Type": "application/json"
                },
                body: contentBody
            });
            const response = await sendFetch.json();
            return response;
        }
        catch (error) {
            return error;
        }
    }
}
exports.WebHookServices = WebHookServices;
