import express, { Express, Request, Response } from "express";
import compression from "compression"
import cors from "cors";
import { auth } from "./middleware/auth.middleware";
import userRouter from "./app/user/user.routes";
import timeSheetRouter from "./app/time-sheet/time-sheet.routes";
import authRouter from "./app/user/auth.routes";
import morganMiddleware from "./logger/morgan.middleware";
import leaveRouter from "./app/leave/leave.routes";

export const serverExpress: Express = express();
serverExpress.use(express.json());
serverExpress.use(compression());
serverExpress.use(cors());
serverExpress.use(morganMiddleware);

serverExpress.use('/api', authRouter);
serverExpress.use('/api', userRouter);
serverExpress.use('/api', timeSheetRouter);
serverExpress.use('/api', leaveRouter);

