const { Pool } = require('pg');

// Log the environment variable to ensure it's being loaded
console.log('Database URL:', process.env.DATABASE_URL);

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false // Adjust this according to your needs
    }
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};