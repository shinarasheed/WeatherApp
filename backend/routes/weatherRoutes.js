import express from 'express';
import weatherController from '../controllers/weatherController';

const router = express.Router();

router.post('/', weatherController.getWeatherData);
router.post('/myWeather', weatherController.getWeatherCureentLocation);
router.post('/history', weatherController.getHistoricalData);

export default router;
