import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/token.service';
import Logger from '../logger/logger';

export const auth = (role: string = 'user') => {
  return async (req: Request, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'token not found' });
    }

    try {
      const decodedToken = await verifyToken(token);
      if (!decodedToken) {
        return res.status(401).json({ message: 'invalid Token' });
      }
      if (decodedToken) {
        const payload: any = decodedToken;
        req.body.userId = payload.userId;
        if (payload.roles.includes(role.toLocaleLowerCase())) {
          return next();
        }
        else {
          return res.status(403).json({ message: 'unauthorized' });
        }
      }
    } catch (error) {
      Logger.error(error);
      return res.status(401).json(error);
    }
  }
};
