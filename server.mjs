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

// POST /users - Create a new user
app.post('/users', (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT /users/:id - Update a user by ID
app.put('/users/:id', (req, res) => {
  const userIndex = users.findIndex(user => user.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users[userIndex] = {
      ...users[userIndex],
      ...req.body
    };
    res.json(users[userIndex]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});


// DELETE /users/:id - Delete a user by ID
app.delete('/users/:id', (req, res) => {
  const userIndex = users.findIndex(user => user.id === parseInt(req.params.id));
  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.json({ message: 'User deleted' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

const port = 3000;
