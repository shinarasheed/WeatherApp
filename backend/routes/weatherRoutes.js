import express from 'express';
import weatherController from '../controllers/weatherController';

const router = express.Router();

router.post('/', weatherController.getWeatherData);
router.post('/currentweather', weatherController.getWeatherCureentLocation);

export default router;
