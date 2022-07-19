import express, { Application } from 'express';
import homeRoute from './routes';

const app: Application = express();
const port = 3000;

app.use(homeRoute);

app.listen(port, () => {
    console.log(`The server is running on http://localhost:${port}`);
});

export default app;
