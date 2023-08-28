import { Router } from 'express';
import { createUser, getUser, getUsers, softDeleteUser, updateUser } from './user.controller';
import { auth } from '../../middleware/auth.middleware';

const userRouter = Router();

userRouter.post('/user', createUser);
userRouter.get('/user', getUsers);
userRouter.get('/user/:id', getUser);
userRouter.put('/user/:id', auth('admin'), updateUser);
userRouter.delete('/user/:id', softDeleteUser);

export default userRouter;
