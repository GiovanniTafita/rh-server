import express, { Express, Request, Response } from "express";
import compression from "compression"
import cors from "cors";
import { auth } from "./middleware/auth.middleware";
import userRouter from "./app/user/user.routes";
import timeSheetRouter from "./app/time-sheet/time-sheet.routes";
import authRouter from "./app/user/auth.routes";

export const serverExpress: Express = express();
serverExpress.use(express.json());
serverExpress.use(compression());
serverExpress.use(cors());

serverExpress.use('/api', authRouter);
serverExpress.use('/api', userRouter);
serverExpress.use('/api', timeSheetRouter);

