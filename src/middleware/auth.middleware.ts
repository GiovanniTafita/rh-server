import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/token.service';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'token not found' });
  }

  try {
    const decodedToken = verifyToken(token);
    if (!decodedToken) {
      return res.status(401).json({ message: 'invalid Token' });
    }
    if (decodedToken) {
      next();

    }
  } catch (error) {
    return res.status(401).json({ message: 'invalid Token' });
  }
};
