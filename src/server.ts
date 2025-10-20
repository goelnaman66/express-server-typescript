import express from 'express';
import {serverConfig} from './config';
import v1Router from './routers/v1/index.router';
import v2Router from './routers/v2/index.router';

const app = express();

app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.text()); // Middleware to parse text bodies

app.use(express.urlencoded({ extended: true })); // Middleware to parse URL-encoded bodies


// registering all the routers and their corresponding handlers
// app.use(pingRouter);
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);

app.listen(serverConfig.PORT, () => {
    console.log(`Server is running at http://localhost:${serverConfig.PORT}`);
});
 