import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import xss from 'xss-clean';
import hpp from 'hpp';
import cors from 'cors';
import 'colors';
import connectDB from './config/db';
import router from './routes/index';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());

//set secure http headers
app.use(helmet());

//development logging
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//100 request in 1 hour
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 10000,
  message: 'Too many requests from this IP, please try again in an hour',
});

app.use('/api/v1', limiter);

//Bodyparser.  parse body data
app.use(express.json({ limit: '10kb' }));

//Data sanitization against XSS
app.use(xss());

//prevent parameter pollution
app.use(hpp());

app.get('/', (req, res) => {
  res.send('API is running');
});

app.all('*', (req, res, next) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});

//api router
app.use('/api/v1', router);

export default app;
