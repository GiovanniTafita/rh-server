import { Request, Response } from 'express';
import { User } from './user.model';
import { UserService } from './user.service';

const userService = new UserService();
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = new User();
    user.email = email;
    user.password = password;
    const newUser = await userService.registerUser(user);

    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const token = await userService.loginUser({ email, password });

  if (token) {
    return res.status(200).json({ token })
  }
  return res.status(401).json({ message: 'Identifiants invalides' });
};
