import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import 'colors';
import connectDB from './config/db';
import router from './routes/index';

dotenv.config();

connectDB();

const app = express();

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(cors());
app.use(express.json());

app.use('/', router);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')));

  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../frontend/build', 'index.html'));
  });
}

// app.all('*', (req, res, next) => {
//   res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
//   next();
// });

export default app;
