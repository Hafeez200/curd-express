
import express from 'express';
import bodyParser from 'body-parser'; // Import body-parser

const app = express();
app.use(bodyParser.json()); // Use body-parser middleware