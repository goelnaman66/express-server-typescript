import express from 'express';
import {serverConfig} from './config';
import pingRouter from './routers/ping.router';

const app = express();

// registering all the routers and their corresponding handlers
app.use(pingRouter);
 
app.listen(serverConfig.PORT, () => {
    console.log(`Server is running at http://localhost:${serverConfig.PORT}`);
});
 