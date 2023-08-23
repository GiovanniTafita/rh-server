import { Router } from 'express';
import { loginUser } from './user.controller';

const authRouter = Router();

authRouter.post('/login', loginUser);

export default authRouter;
