const express = require('express');
const { sql, poolPromise } = require('./db');
const cors = require('cors')

const app = express();

app.use(express.json());
app.use(cors())

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

app.post('/auth', async (req, res) => {
    const { email_address, user_password } = req.body;

    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('email_address', sql.VarChar, email_address)
            .input('user_password', sql.VarChar, user_password)
            .query(
                `
                SELECT email_address, userId FROM users WHERE email_address = @email_address and user_password = @user_password
                `
            )
        if (result.recordsets[0][0].email_address.length > 0) {
            res.status(200).json(result.recordsets[0][0])
        } else {
            res.status(409).json({ message: 'User not found' })
        }
    } catch (err) {
        res.status(404).json({ error: "User not found" });
    }
})

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

app.post('/addFavMov', async (req, res) => {
    const { userId, movieId } = req.body;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('movieId', sql.Int, movieId)
            .input('userId', sql.Int, userId)
            .query(
                `
                INSER INTO movies_favorites values(@movieId, @userId)
                `
            )
        res.status(200).json({ message: "Movie Add to Favorites" })
    } catch (err) {
        res.status(404).json({ error: "Something is wrong" });
    }
})

app.post('/addFavSer', async (req, res) => {
    const { userId, serieId } = req.body;
    try {
        const pool = await poolPromise;
        const result = await pool.request()
            .input('serieId', sql.Int, serieId)
            .input('userId', sql.Int, userId)
            .query(
                `
                INSER INTO movies_favorites values(@serieId, @userId)
                `
            )
        res.status(200).json({ message: "Movie Add to Favorites" })
    } catch (err) {
        res.status(404).json({ error: "Something is wrong" });
    }
})

app.listen(PORT, () => {
    console.log(`Server listening ${PORT}`)
})