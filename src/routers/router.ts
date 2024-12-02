import express from 'express'
import { Request, Response, NextFunction } from 'express'
import { webHookControllersSendMenssage } from '../webhook/controllers/webhook.Controllers'

export const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({"server": "Online"})
})

//simula o evento que recebe os dados
router.post('/msg', webHookControllersSendMenssage)