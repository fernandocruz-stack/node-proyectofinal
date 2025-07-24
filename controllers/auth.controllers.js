import { generateToken } from '../utils/token-generator.js';

const default_user = {
  id: 1,
  email: 'user@email.com',
  password: 'strongPass123',
};

export async function login(req, res) {
  const { email, password } = req.body;

  if (email === default_user.email && password === default_user.password) {
    const user = { id: default_user.id, email };
    const token = generateToken(user);
    res.json({ token });
  } else {
    res.sendStatus(401); // Unauthorized
  }
}
