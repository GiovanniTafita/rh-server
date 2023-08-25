import { Request, Response } from 'express';
import { User } from './user.model';
import { UserService } from './user.service';
import { Profile } from '../profile/profile.model';

const userService = new UserService();
export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = new User();
    const profile = new Profile();
    user.email = email;
    user.password = password;
    user.profile = profile;

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

export const updateUser = async (req: Request, res: Response) => {
  try {
    const id = +req.params['id'];
    const updatedUser = await userService.update2(id, req.body);

    return res.status(201).json(updatedUser);
  } catch (error) {
    return res.status(500).json({ error });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await userService.getAll(true);

    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const getUser = async (req: Request, res: Response) => {
  try {
    const id = +req.params['id'];
    const user = await userService.getOneBy({ id });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ error });
  }
}

export const softDeleteUser = async (req: Request, res: Response) => {
  try {
    const id = +req.params['id'];
    const deletedUser = await userService.deleteSoft(id);

    return res.status(200).json(deletedUser);
  } catch (error) {
    return res.status(500).json({ error });
  }
}
