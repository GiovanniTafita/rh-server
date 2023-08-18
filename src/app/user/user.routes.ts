import { Router } from 'express';
import { createUser, loginUser } from './user.controller';

const authRouter = Router();

authRouter.post('/register', createUser);
authRouter.post('/login', loginUser);

export default authRouter;
