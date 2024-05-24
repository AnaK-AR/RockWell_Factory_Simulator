import db from '@/lib/db';

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const { rows } = await db.query('SELECT NOW()');
            res.status(200).json({ currentTime: rows[0].now, message: "La pagina esta conectada a la base de datos" });
        } catch (error) {
            console.error('Database connection error:', error); // Log the error for debugging
            res.status(500).json({ message: "La pagina no esta conectada a la base de datos", error: error.message });
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}