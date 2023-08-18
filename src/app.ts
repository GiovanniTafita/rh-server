import express, { Express, Request, Response } from "express";
import compression from "compression"
import cors from "cors";
import { authMiddleware } from "./middleware/auth.middleware";
import authRouter from "./app/user/user.routes";


export const serverExpress: Express = express();
serverExpress.use(express.json());
serverExpress.use(compression());
serverExpress.use(cors());

serverExpress.use('/api', authRouter);
serverExpress.use('/api/home', authMiddleware, (req: Request, res: Response) => {
  res.status(200).json({ message: 'OK' })
});

