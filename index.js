const express = require('express');
const { sql, poolPromise } = require('./db');

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

const PORT = process.env.BC_PORT || 3000;

app.post('/users', async (req, res) => {
    const { first_name, last_name, email_address, user_password } = req.body;

    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('first_name', sql.VarChar, first_name.trim())
            .input('last_name', sql.VarChar, last_name)
            .input('email_address', sql.VarChar, email_address)
            .input('user_password', sql.VarChar, user_password)
            .query(
                `
                INSERT INTO users(first_name, last_name, email_address, user_password)
                VALUES(@first_name,@last_name,@email_address,@user_password)
            `);
        res.status(201).json({ message: 'User created successfully' })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get('/movies', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(
                `
                SELECT * FROM movies
            `);
        res.status(200).json(result.recordsets[0]);

    } catch (err) {
        res.status(404).json({ error: err.message });
    }
});

app.get('/series', async (req, res) => {
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .query(
                `
                    SELECT * FROM series
                `
            )
        res.status(200).json(result.recordsets[0]);
    } catch {
        res.status(404).json({ error: err.message });
    }
})

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})