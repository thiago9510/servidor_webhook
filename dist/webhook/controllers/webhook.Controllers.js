"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webHookControllersSendMenssage = void 0;
const webhook_services_1 = require("../services/webhook.services");
const webHookControllersSendMenssage = async (req, res) => {
    const requestQuery = req.body;
    try {
        const sendMenssage = new webhook_services_1.WebHookServices();
        const returnWebhook = await sendMenssage.SendMenssage(requestQuery);
        if (returnWebhook instanceof Error) {
            res.status(400).json({
                sucess: false,
                message: returnWebhook.message
            });
        }
        else if (returnWebhook.status != 200) {
            res.status(returnWebhook.status).json({
                sucess: false,
                message: JSON.stringify(returnWebhook)
            });
        }
        else {
            res.status(200).json({
                sucess: true,
                message: returnWebhook
            });
        }
    }
    catch (error) {
        res.status(400).json({
            sucess: false,
            message: error
        });
    }
};
exports.webHookControllersSendMenssage = webHookControllersSendMenssage;
