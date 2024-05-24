const db = require('../lib/db');
const jwt = require('jsonwebtoken');
const cookie = require('cookie');
const bcrypt = require('bcrypt');

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { username, password } = req.body;
    try {
      const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
      if (rows.length > 0) {
        const user = rows[0];
        const passwordMatch = await bcrypt.compare(password, user.password_hash);
        if (passwordMatch) {
          // Passwords match
          // Continue with login process (token generation, etc.)
          res.status(200).json({ message: 'Login successful!', user });
        } else {
          // Passwords do not match
          res.status(401).json({ message: 'Invalid credentials' });
        }
      } else {
        res.status(404).json({ message: 'User not found' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Database query failed', error: error.message });
    }
  } else {
    res.status(405).end();
  }
}