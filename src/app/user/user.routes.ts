import { Router } from 'express';
import { createUser, getUsers, loginUser, updateUser } from './user.controller';

const userRouter = Router();

userRouter.post('/register', createUser);
userRouter.get('/users', getUsers);
userRouter.put('/user/:id', updateUser);

export default userRouter;
