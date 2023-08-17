import { Request, Response } from 'express';
import { AppDataSource } from '../database/data-source';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import { generateToken } from '../services/token.service';

export const createUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userRepository = AppDataSource.getRepository(User);

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = userRepository.create({ email, password: hashedPassword });
    await userRepository.save(newUser);

    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred' });
  }
};

export const loginUser = async (req: Request, res: Response) => {

  const { email, password } = req.body;
  const userRepository = AppDataSource.getRepository(User);

  const user = await userRepository.findOneBy({ email });
  if (!user) {
    return res.status(401).json({ message: 'Identifiants invalides' });
  }
  if (user.password && user.id) {
    const isValid = await bcrypt.compare(password, user.password);
    if (isValid) {
      const token = generateToken(user.id);
      return res.status(200).json({ token });
    }
  }
};
