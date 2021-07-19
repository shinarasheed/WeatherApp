import express from 'express';

import weatherRoutes from '../routes/weatherRoutes';

const router = express.Router();

router.use('/weather', weatherRoutes);

export default router;
