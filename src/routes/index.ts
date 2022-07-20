import express, { Router, Request, Response } from 'express';
import controlRoute from './api/control';
import path from 'path';

const homeRoute: Router = express.Router();
homeRoute.use('/api', controlRoute);

homeRoute.get('/', (req: Request, res: Response): void => {
    res.sendFile(path.resolve(__dirname, '../../public/html/index.html'));
});

export default homeRoute;
