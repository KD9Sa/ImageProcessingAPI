import express, { Router } from 'express';
import controlRoute from './api/control';
import path from 'path';

const homeRoute: Router = express.Router();
homeRoute.use('/api', controlRoute);

homeRoute.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../../public/html/index.html'));
});

export default homeRoute;
