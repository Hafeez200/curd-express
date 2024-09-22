import express from 'express';
import bodyParser from 'body-parser'; // Import body-parser

const app = express();
app.use(bodyParser.json()); // Use body-parser middleware

// Users array
let users = [
  { id: 1, username: 'user1', age: 30 },
  { id: 2, username: 'user2', age: 25 }
];

// GET /users - Retrieve all users
app.get('/users', (req, res) => {
  res.json(users);
});

// GET /users/:id - Retrieve a specific user by ID
app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});