import express from 'express';
import bodyParser from 'body-parser'; // Import body-parser

const app = express();
app.use(bodyParser.json()); // Use body-parser middleware

// Users array
let users = [
  { id: 1, username: 'user1', age: 30 },
  { id: 2, username: 'user2', age: 25 }
];