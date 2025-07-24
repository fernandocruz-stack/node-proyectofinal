import jwt from 'jsonwebtoken';
import 'dotenv/config';

const secret_key = process.env.JWT_SECRET_KEY;

// Middleware para verificar el token JWT
export const authentication = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) return res.sendStatus(401); // No se envió cabecera

  const token = authHeader.split(' ')[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, secret_key, (err, decoded) => {
    if (err) return res.sendStatus(403); // Token inválido
    req.user = decoded; // Podés guardar los datos del usuario en req
    next();
  });
};

//Esta parte me ayude con la IA y el codigo del materia del curso ya que lo hice a las corridas