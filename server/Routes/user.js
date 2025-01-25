import express from 'express';
import db from '../dbConnection.js';

const Router = express.Router();

// GET Route to fetch users
Router.get('/', (req, res) => {
  const { username, password } = req.query;

  // Input validation
  if (!username || !password) {
    return res.status(400).send('Username and password are required.');
  }

  // Database query
  db.query(
    'SELECT * FROM users WHERE username = ? AND password = ?',
    [username, password],
    (err, result) => {
      if (err) {
        console.error('Error fetching users:', err);
        return res.status(500).send('An error occurred while fetching users.');
      }

      // Check if result is empty
      if (result.length === 0) {
        return res.status(404).send('No user found with the given credentials.');
      }

      res.status(200).send(result); // Send the result
    }
  );
});

// POST Route to add a user
Router.post('/', (req, res) => {
  const { name, password } = req.body;

  // Input validation
  if (!name || !password) {
    return res.status(400).send('Name and password are required.');
  }

  // Insert query
  db.query(
    'INSERT INTO users (name, password) VALUES (?, ?)',
    [name, password],
    (err, result) => {
      if (err) {
        console.error('Error adding user:', err);
        return res.status(500).send('An error occurred while adding the user.');
      }

      res.status(201).send('User added successfully.');
    }
  );
});

export default Router;
