import jwt, { SignOptions, VerifyOptions } from 'jsonwebtoken';
import fs from 'fs';

// Charger les clés depuis les fichiers (assurez-vous d'ajuster les chemins)
const privateKey = fs.readFileSync('jwt/private_key.pem', 'utf8');
const publicKey = fs.readFileSync('jwt/public_key.pem', 'utf8');

const signOptions: SignOptions = {
  algorithm: 'RS256', // Utilisez l'algorithme approprié pour les clés RSA
  expiresIn: '1h',
};

const verifyOptions: VerifyOptions = {
  algorithms: ['RS256'],
};

export const generateToken = (userId: number): string => {
  const payload = { userId };
  const token = jwt.sign(payload, privateKey, signOptions);
  return token;
};

export const verifyToken = (token: string) => {
  try {
    const decodedToken = jwt.verify(token, publicKey, verifyOptions);
    return decodedToken;
  } catch (error) {
    return null;
  }
};
