import express from 'express';
import { pingHandler } from '../controllers/ping.controller';

const pingRouter = express.Router();


function middleware1(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log('Middleware 1 executed');
    next();
};

function middleware2(req: express.Request, res: express.Response, next: express.NextFunction) {
    console.log('Middleware 2 executed');
    next();
};

pingRouter.get('/ping', middleware1, middleware2, pingHandler);

export default pingRouter;