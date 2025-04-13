const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');

const app = express();
const port = 3000;

// PostgreSQL connection
const pool = new Pool({
  user: 'postgres',
  host: 'postgres',
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to receive contact form data

app.get('/test'), (req,res) =>{
res.status(200).send("test success")
}
app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  try {
    const result = await pool.query(
      'INSERT INTO contact_messages (name, email, message) VALUES ($1, $2, $3) RETURNING *',
      [name, email, message]
    );
    res.status(200).json({ message: 'Message saved!', data: result.rows[0] });
  } catch (err) {
    console.error('Error saving message:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

