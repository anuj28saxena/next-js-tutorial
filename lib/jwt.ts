
import jwt from 'jsonwebtoken';

const SECRET = "MY_SECRET_KEY";
// In a real application, you should store the secret key in an environment variable

export function generateToken(payload: object){
    return jwt.sign(payload,SECRET, { expiresIn: '1h' });
}

export function verifyToken(token: string){
    return jwt.verify(token, SECRET);
}
