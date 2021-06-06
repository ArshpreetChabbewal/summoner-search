import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import apiFunctions from './routes/routes.js';

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({
    allowedHeaders: ['Content-Type'],
    origin: '*',
    preflightContinue: true
  }));

app.get('/', (req, res) => {
    res.send('hello')
})

app.use('/data', apiFunctions);

const PORT = 5000;

app.listen(PORT, () => {
    console.log('server running')
})