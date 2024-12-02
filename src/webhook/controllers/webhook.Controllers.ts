import { Request, Response, NextFunction, json } from "express";
import { WebHookServices } from "../services/webhook.services";

export const webHookControllersSendMenssage = async (req: Request, res: Response) => {
    const requestQuery: any = req.body    
    try {
        const sendMenssage = new WebHookServices()        
        const returnWebhook = await sendMenssage.SendMenssage(requestQuery)       
        

        if(returnWebhook instanceof Error){
            res.status(400).json({
                sucess: false,
                message: returnWebhook.message         
            })           
        }else if (returnWebhook.status != 200){
            res.status(returnWebhook.status).json({
                sucess: false,
                message: JSON.stringify(returnWebhook)           
            })
        }else {
            res.status(200).json({
                sucess: true,
                message: returnWebhook           
            })
        }    
    } catch (error) {
        res.status(400).json({
            sucess: false,
            message: error            
        })
    }
}