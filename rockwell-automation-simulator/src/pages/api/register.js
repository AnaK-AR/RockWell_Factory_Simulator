const bcrypt = require('bcrypt');
const db = require('../lib/db');

const saltRounds = 10; // Cost factor hashing

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password, location, industry } = req.body;

    //  validation
    if (!email || !password || !location || !industry) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    try {
      // Check if user exists
      const userExist = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      if (userExist.rows.length > 0) {
        return res.status(409).json({ message: 'Email already in use' });
      }

      // Hash password
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      // Insert new user into database
      const result = await db.query(
        'INSERT INTO users (email, password_hash, location, industry) VALUES ($1, $2, $3, $4) RETURNING id',
        [email, hashedPassword, location, industry]
      );

      // Retrieve the new user ID if necessary
      const userId = result.rows[0].id;

      res.status(201).json({ message: 'User registered successfully', userId: userId });
    } catch (error) {
      res.status(500).json({ message: 'Database query failed', error: error.message });
    }
  } else {
    // Handle incorrect method
    res.status(405).end();
  }
}