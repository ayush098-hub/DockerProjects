const express = require('express');
const { Pool } = require('pg');
const app = express();
const PORT = 3000;

// PostgreSQL connection setup
const pool = new Pool({
  user: 'postgres',
  host: 'post-cont3', // Using container name 'db' as hostname
  database: 'postgres',
  password: 'postgres',
  port: 5432,
});

// Root route
app.get('/', (req, res) => {
  res.set('Content-Type', 'text/html');
  res.status(200).send("<h1>Hello GFG Learner!</h1>");
});

// New route to insert data into PostgreSQL
app.get('/insert-data', async (req, res) => {
  try {
    // Sample data to insert
    const newData = {
      name: "Example Item",
      description: "This is an example item",
      createdAt: new Date()
    };

    const query = 'INSERT INTO items(name, description, created_at) VALUES($1, $2, $3) RETURNING id';
    const values = [newData.name, newData.description, newData.createdAt];
    
    const result = await pool.query(query, values);
    
    res.set('Content-Type', 'application/json');
    res.status(200).json({
      success: true,
      message: 'Data inserted successfully',
      insertedId: result.rows[0].id
    });
  } catch (error) {
    console.error('Error inserting data:', error);
    res.status(500).json({
      success: false,
      message: 'Failed to insert data',
      error: error.message
    });
  }
});

app.listen(PORT, (error) => {
  if (!error)
    console.log("Server is Successfully Running, and App is listening on port " + PORT);
  else 
    console.log("Error occurred, server can't start", error);
});
