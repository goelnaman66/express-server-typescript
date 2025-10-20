import express from 'express';
import { pingHandler } from '../../controllers/ping.controller';
import { validateRequestBody } from '../../validators';
import { pingSchema } from '../../validators/ping.validator';

const v2Router = express.Router();

// Define v2 routes here
v2Router.get('/ping', validateRequestBody(pingSchema), pingHandler);

v2Router.get('/ping/:id/', pingHandler);

export default v2Router;