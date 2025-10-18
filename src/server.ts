import express from 'express';
import loadEnv from './config';

loadEnv();

const app = express();
const PORT: number = 3000;

app.get('/', (req, res) => {
  res.send('Hello, TypeScript with Express!');
});

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
 