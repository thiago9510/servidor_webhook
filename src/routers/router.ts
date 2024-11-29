import express from 'express'
import { Request, Response, NextFunction } from 'express'

export const router = express.Router()

router.get('/', (req: Request, res: Response) => {
    res.status(200).json({"server": "Online"})
})